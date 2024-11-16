# NestJS CQRS + DDD Example 🚀

This repository demonstrates how to implement Domain-Driven Design (DDD) and Command Query Responsibility Segregation (CQRS) using NestJS. 🎯 The project showcases best practices for building scalable and maintainable applications.

## Features

- **Domain-Driven Design**: Clear separation of concerns with well-defined domains and entities.
- **CQRS**: Efficiently handles commands and queries with event-driven patterns.
- **Event Sourcing (Optional)**: Easily extendable to store the state as a series of events.
- **Vertical Slice Architecture**: Modular organization for better scalability and testability.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/Balsalobre/nestjs-cqrs-ddd-architecture.git
   cd nestjs-cqrs-ddd-architecture
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Run the application**:
   ```sh
   npm run start
   ```

## Docker Setup

This project includes a `docker-compose.yml` file to set up the necessary services for development.

### Services

- **PostgreSQL**: Used as the write database.
- **DynamoDB Local**: Used as the read database.
- **EventStore**: Used for event sourcing.

### Usage

1. **Start the services**:

   ```sh
   docker-compose up
   ```

2. **Stop the services**:
   ```sh
   docker-compose down
   ```

## Project Structure

The project is organized as follows:

- **src**: Contains the main source code.
  - **domain**: Domain model and entities.
  - **application**: Application services, commands, and queries.
  - **infrastructure**: Infrastructure-specific implementations.
  - **interfaces**: API controllers and DTOs.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License.

---

Perfect for developers looking to learn or apply advanced architectural patterns in NestJS applications! 🚀
