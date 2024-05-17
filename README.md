# Mongodb Installation https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
Tap the MongoDB Homebrew Tap to download the official Homebrew formula for MongoDB and the Database Tools, by running the following command in your macOS Terminal:
brew tap mongodb/brew

To update Homebrew and all existing formulae:
brew update

To install MongoDB, run the following command in your macOS Terminal application:
brew install mongodb-community@7.0

To run MongoDB (i.e. the mongod process) as a macOS service, run:
brew services start mongodb-community@7.0

To stop a mongod running as a macOS service, use the following command as needed:
brew services stop mongodb-community@7.0

If you started MongoDB as a macOS service:
brew services list
You should see the service mongodb-community listed as started.

# Mongodb GUI
https://www.mongodb.com/products/tools/compass


# Install packages
npm install

# Run node server
node index.js