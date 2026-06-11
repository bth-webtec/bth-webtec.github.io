#!/usr/bin/env bash

#
# Download the lab files to the current directory, execute like this.
#
# Create an empty local directory for the lab
#  mkdir lab_01
#  cd lab_01
#
# Locally:
#  bash download_lab.bash
#
# Using remote:
#  bash <(curl -Ls https://raw.githubusercontent.com/btth-webtec/website/refs/heads/main/src/content/docs/laromaterial/lab/download_lab.bash)
#

# Read the lab from the student
read -p "What lab do you want to get? (1, 2, 3 or 4): " lab

if [[ $lab =~ ^[1-4]$ ]]; then
    LAB="lab_0$lab"
    printf "Great! I will download %s into the directory 'lab/%s'.\n" "$LAB" "$LAB"
    mkdir -p "lab/$LAB"
else
    printf "❌ Error: That is not a valid lab, try again.\n"
    exit 1
fi

# Files to download
BASE="https://raw.githubusercontent.com/bth-webtec/website/refs/heads/main/src/content/docs/laromaterial/lab"
FILES=(
    "README.md"
    "lab.js"
    "answer.js"
    ".solution.js"
)

# Loop through the files to download
for file in "${FILES[@]}"; do
    # Do not download if the file already exists
    if [ -e "lab/$LAB/$file" ]; then
        printf "❌ lab/%s/%s already exists, will now overwrite it.\n" "$LAB" "$file"
        continue
    fi

    # Download the file
    curl -sL -o "lab/$LAB/$file" "$BASE/$LAB/$file"

    # Check if the download was successful
    printf "%s lab/%s/%s\n" "$([ $? -eq 0 ] && echo '✅' || echo '❌')" "$LAB" "$file"
done

##
# Specific download for the src/dbw.js file
# Do not download if the file already exists
file=".dbw.js"
if [ -e "lab/$LAB/$file" ]; then
    printf "❌ lab/%s/%s already exists, will now overwrite it.\n" "$LAB" "$file"
    exit 0
fi

# Download the file
curl -sL -o "lab/$LAB/$file" "$BASE/$LAB/../src/dbw.js"

# Check if the download was successful
printf "%s lab/%s/%s\n" "$([ $? -eq 0 ] && echo '✅' || echo '❌')" "$LAB" "$file"
