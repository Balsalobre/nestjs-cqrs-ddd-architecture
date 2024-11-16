# 3 Classes diagram

```
    classDiagram
        class OrdersModule {
            +OrdersInfrastructureModule imports
            +OrdersController controllers
            +CreateOrderCommandHandler providers
            +FindOrderQueryHandler providers
            +OrderFactory providers
            +DiscountService providers
        }

        class CreateOrderCommandHandler {
            -OrderCommandRepository orderRepository
            -OrderFactory orderFactory
            +execute(CreateOrderCommand): void
        }

        class FindOrderQueryHandler {
            -OrderQueryRepository orderRepository
            -EventStore eventStore
            +execute(FindOrderQuery): MaterializedOrder
        }

        class OrderFactory {
            +create(customerId, shippingAddress, orderItems, discounts): Order
        }

        class DiscountService {
        }

        class OrdersController {
        }

        OrdersModule --> OrdersInfrastructureModule
        OrdersModule --> OrdersController
        OrdersModule --> CreateOrderCommandHandler
        OrdersModule --> FindOrderQueryHandler
        OrdersModule --> OrderFactory
        OrdersModule --> DiscountService

        CreateOrderCommandHandler --> OrderCommandRepository
        CreateOrderCommandHandler --> OrderFactory

        FindOrderQueryHandler --> OrderQueryRepository
        FindOrderQueryHandler --> EventStore
        FindOrderQueryHandler --> MaterializedOrder
```

[![](https://mermaid.ink/img/pako:eNqNlMtqwzAQRX9FaNXS5Ae8KJQ8aBahtNkVb4Q0SQS2xowk0zTk36vYieOX0hgMkuaM53p0pSOXqIAnXGbC2rkWOxJ5alh4qhX2QQrIrlH5DNixjpyflzqwMlsS1pGXzhNcMJ0XSM4O4BkaR5hlQEw2wzY2IxAOKniGeS6Meg_vmS8IS6269FIbVbGfHuhwj6yopZAO6TAKzLWV6I3bAJVaQp85pabdk7jMVoOm7fgXFGh1VR7Py7d5P-GqEluTllD4AekdPA0lPCesRK1GBY93aiC2ij4kdVFCaFZYBAbNcERmt3CQuA6qSYtM_0IdGNXb6UTbdLL67SfprcMcaKUmzO51UWize1OKwNpJrXrlIA9jddlXG0rHy_V3_xgX1fZwH-sclen0lcWPyN2EW4kIFvVfhB_d_nsSOr4bIL12XX8_fiqa7w5Ow8OZjaI6Y9zQDd0z8n85i56F4-TAvnzCgw9zoVW4QytDpNztIYeUJ2GoYCt85lKemlNAhXe4ORjJk2AHmHBfqPDBy63Lk63IbFgl9Lt9MyuE-Ua8Rk9_X7X1nQ?type=png)](https://mermaid.live/edit#pako:eNqNlMtqwzAQRX9FaNXS5Ae8KJQ8aBahtNkVb4Q0SQS2xowk0zTk36vYieOX0hgMkuaM53p0pSOXqIAnXGbC2rkWOxJ5alh4qhX2QQrIrlH5DNixjpyflzqwMlsS1pGXzhNcMJ0XSM4O4BkaR5hlQEw2wzY2IxAOKniGeS6Meg_vmS8IS6269FIbVbGfHuhwj6yopZAO6TAKzLWV6I3bAJVaQp85pabdk7jMVoOm7fgXFGh1VR7Py7d5P-GqEluTllD4AekdPA0lPCesRK1GBY93aiC2ij4kdVFCaFZYBAbNcERmt3CQuA6qSYtM_0IdGNXb6UTbdLL67SfprcMcaKUmzO51UWize1OKwNpJrXrlIA9jddlXG0rHy_V3_xgX1fZwH-sclen0lcWPyN2EW4kIFvVfhB_d_nsSOr4bIL12XX8_fiqa7w5Ow8OZjaI6Y9zQDd0z8n85i56F4-TAvnzCgw9zoVW4QytDpNztIYeUJ2GoYCt85lKemlNAhXe4ORjJk2AHmHBfqPDBy63Lk63IbFgl9Lt9MyuE-Ua8Rk9_X7X1nQ)