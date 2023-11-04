#!/bin/bash

# Get the current directory where the script is located
current_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Change to the root folder of your repo
cd "$current_dir"

# Run your build command (e.g., pnpm build)
echo "Running the build..."
if ! pnpm build; then
  echo "Build failed. Aborting the script."
  exit 1
fi

# Detect the current branch
current_branch=$(git symbolic-ref --short HEAD)

# Prompt the user for a branch name (default: $current_branch)
echo "Enter the branch name (default: $current_branch):"
read branch_name

# Use the current branch as the default if no input is provided
if [ -z "$branch_name" ]; then
  branch_name="$current_branch"
fi

# Check if the user-provided branch name is different from the current branch
if [ "$branch_name" != "$current_branch" ]; then
  # Switch to the specified branch
  echo "Checking out branch: $branch_name"
  git checkout "$branch_name"
fi

# Add all files
git add .

# Prompt the user for a commit message
echo "Enter your commit message:"
read commit_message

# Commit changes with the user-provided message
git commit -m "$commit_message"

# Push changes to the remote repository on the specified branch
git push origin "$branch_name"
