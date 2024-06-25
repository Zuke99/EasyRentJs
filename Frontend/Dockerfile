# Use the official Node.js image from the Docker Hub
FROM node:21-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install -g expo-cli && npm install

# Copy the rest of the application code
COPY . .

# Expose the port Expo CLI uses
EXPOSE 19000

# Start the application
CMD ["expo", "start", "--tunnel"]
