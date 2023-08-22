FROM scratch

COPY larvis /larvis

ENTRYPOINT ["/larvis"]

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Expose the port your API will run on (adjust port as needed)
EXPOSE 8080

# Command to start your API (adjust as needed)
CMD ["npm", "start"]
