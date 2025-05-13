#!/bin/bash

echo "Setting up Zebo-Learning project..."

# Install dependencies in the root directory
npm install

# Navigate to the project directory
cd zebo-learning

# Install dependencies in the project directory
npm install

echo "Setup complete! You can now run the project using one of the following commands:"
echo "  npm run dev    - Start development server"
echo "  npm run build  - Build the project for production"
echo "  npm run start  - Start production server"
echo ""
echo "Run these commands from the root directory." 