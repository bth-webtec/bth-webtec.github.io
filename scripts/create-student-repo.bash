#!/usr/bin/env bash
#
# Create a new student repo from the webtec-abcd25 template.
#
# Usage: bash scripts/create-student-repo.bash <acronym>
# Example: bash scripts/create-student-repo.bash mosr25

set -euo pipefail

ACRONYM="${1:-}"
if [[ -z "$ACRONYM" ]]; then
    echo "Usage: $0 <student-acronym>"
    echo "Example: $0 mosr25"
    exit 1
fi

TEMPLATE="bth-webtec/webtec-abcd25"
NEW_REPO="bth-webtec/webtec-${ACRONYM}"
CLONE_DIR="webtec-${ACRONYM}"

if [[ -d "${CLONE_DIR}" ]]; then
    echo "Error: directory '${CLONE_DIR}' already exists, aborting."
    exit 1
fi

echo "==> Creating repo ${NEW_REPO} from template ${TEMPLATE}"

# Create the new private repo on GitHub
gh repo create "${NEW_REPO}" --private

# Clone the template (single depth is enough)
git clone "git@github.com:${TEMPLATE}.git" "${CLONE_DIR}"
cd "${CLONE_DIR}"

# Replace all occurrences of abcd25 with the student acronym
sed -i "s/abcd25/${ACRONYM}/g" README.md package.json package-lock.json

# Switch remote to the new repo
git remote set-url origin "git@github.com:${NEW_REPO}.git"

# Commit and push
git add README.md package.json package-lock.json
git commit -m "Init repo for ${ACRONYM}"
git push -u origin main

# Create and push submit branches
for KMOM in kmom03 kmom06 kmom10; do
    BRANCH="bth/submit/${KMOM}"
    git branch "${BRANCH}"
    git push origin "${BRANCH}"
    echo "==> Created branch ${BRANCH}"
done

echo ""
echo "Done! Repo: https://github.com/${NEW_REPO}"
