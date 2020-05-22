FROM node:current-slim

# Set the working directory.
WORKDIR /app

# Copy the file from your host to your current location.
COPY frontend ./frontend

COPY backend ./backend

# Run the command inside your image filesystem.
WORKDIR /app/backend
RUN npm install

WORKDIR /app/frontend
RUN npm install && npm run-script build

RUN ls -a

WORKDIR /app

RUN mv ./frontend/build ./backend/client

WORKDIR /app/backend

# # Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 8080

# # Run the specified command within the container.
CMD [ "npm", "start" ]