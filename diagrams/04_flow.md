# Flow diagram

```
    flowchart LR
        A[CreateOrderCommandHandler] --> B[OrderFactory]
        B --> C[Order]
        A --> D[OrderCommandRepository]
        A --> E[CreateOrderCommand]
        A --> F[DiscountService]

        G[FindOrderQueryHandler] --> H[OrderQueryRepository]
        G --> I[EventStore]
        G --> J[FindOrderQuery]
        G --> K[MaterializedOrder]

        B --> F
```

[![](https://mermaid.ink/img/pako:eNptkN1uwjAMhV-lyjW8QC8mQUthf5oGd0u5sBKXRmqSyk2YOsS7z2vHRjciRYr9nWM7PgnlNYpUVI1_VzVQSJ62pUv4LGRGCAFfSCNl3lpwesO3Qdon8_ldspQDKkAFT_1-dC0HlI3oO7cYcrm8rrTF1nfmyjiKVjeaTgSFzE2nfHRhh3Q0CpmOfC0L4_RgfI1I_WTWjfwF_1qvB8m9XB2RyzLACXj4U3gCH-Uzj0sGGvOB-vLr610UYiYskgWjec-nL1SKUKPFUqT81FhBbEIpSndmKcTgd71TIg0UcSZiq7lBbuBAYEVaQdNxlnw81D9RC-7N-ws9fwJ1Upny?type=png)](https://mermaid.live/edit#pako:eNptkN1uwjAMhV-lyjW8QC8mQUthf5oGd0u5sBKXRmqSyk2YOsS7z2vHRjciRYr9nWM7PgnlNYpUVI1_VzVQSJ62pUv4LGRGCAFfSCNl3lpwesO3Qdon8_ldspQDKkAFT_1-dC0HlI3oO7cYcrm8rrTF1nfmyjiKVjeaTgSFzE2nfHRhh3Q0CpmOfC0L4_RgfI1I_WTWjfwF_1qvB8m9XB2RyzLACXj4U3gCH-Uzj0sGGvOB-vLr610UYiYskgWjec-nL1SKUKPFUqT81FhBbEIpSndmKcTgd71TIg0UcSZiq7lBbuBAYEVaQdNxlnw81D9RC-7N-ws9fwJ1Upny)
