# Components diagram

```
graph TD
    App[Aplicación] -->|Usa| CoreModule[Core Module]
    App -->|Usa| OrdersModule[Orders Module]
    CoreModule -->|Usa| TypeOrmModule[TypeOrm Module]
    CoreModule -->|Usa| DynamooseModule[Dynamoose Module]
    CoreModule -->|Usa| EventStoreModule[Event Store Module]
    OrdersModule -->|Controla| OrdersController[Orders Controller]
    OrdersModule -->|Gestiona| CreateOrderCommandHandler[Create Order Command Handler]
    OrdersModule -->|Gestiona| FindOrderQueryHandler[Find Order Query Handler]
    OrdersModule -->|Usa| OrderFactory[Order Factory]
    OrdersModule -->|Usa| DiscountService[Discount Service]
```

[![](https://mermaid.ink/img/pako:eNqFUkFqwzAQ_IrQOfmAD4VgN-2lhJL00jiHRdokAksrZClgkryqT-jHKtuy3RxaGww7szODdqUrFySRZ_zkwJ7ZrigNi9_K2v3KVkqAUN9f5sCWy6fbRw03lpPDN5Khwn1bsr4-jLZJuXESXZ20PXhUT1GTaddY3DidXAnN24rGgCaqh6ONeN76fEHjt34aqyNYxzy6fw_U-XMy3lE1zppwhW6Yd2L-ynjB2isy7WYdgsdOkJPWYORr_NuwvtN7Weqx1JzPXSsju_Z7QNcMmS2bEjt-Lm-60jWIuJumH5El9K-tULWgELeM7qJEvJ2EWSIOfME1Og1Kxpd4baNK7s-oseRZLCUeIVS-5KW5RykET9vGCJ55F3DBg5VxPYWC-IY1z45Q1ZF1FE7nEVkwn0RD9_4DM44OSw?type=png)](https://mermaid.live/edit#pako:eNqFUkFqwzAQ_IrQOfmAD4VgN-2lhJL00jiHRdokAksrZClgkryqT-jHKtuy3RxaGww7szODdqUrFySRZ_zkwJ7ZrigNi9_K2v3KVkqAUN9f5sCWy6fbRw03lpPDN5Khwn1bsr4-jLZJuXESXZ20PXhUT1GTaddY3DidXAnN24rGgCaqh6ONeN76fEHjt34aqyNYxzy6fw_U-XMy3lE1zppwhW6Yd2L-ynjB2isy7WYdgsdOkJPWYORr_NuwvtN7Weqx1JzPXSsju_Z7QNcMmS2bEjt-Lm-60jWIuJumH5El9K-tULWgELeM7qJEvJ2EWSIOfME1Og1Kxpd4baNK7s-oseRZLCUeIVS-5KW5RykET9vGCJ55F3DBg5VxPYWC-IY1z45Q1ZF1FE7nEVkwn0RD9_4DM44OSw)