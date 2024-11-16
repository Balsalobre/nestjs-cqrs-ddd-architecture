# Sequence diagram

## 1

```
    sequenceDiagram
        participant Client
        participant App
        participant OrdersController
        participant CreateOrderCommandHandler
        participant OrderFactory
        participant DiscountService

        Client->>+App: HTTP Request (Create Order)
        App->>+OrdersController: Route to OrdersController
        OrdersController->>+CreateOrderCommandHandler: Handle CreateOrderCommand
        CreateOrderCommandHandler->>+OrderFactory: Create Order
        OrderFactory->>CreateOrderCommandHandler: Return Order
        CreateOrderCommandHandler->>+DiscountService: Apply Discount
        DiscountService->>CreateOrderCommandHandler: Return Discounted Order
        CreateOrderCommandHandler->>OrdersController: Return Result
        OrdersController->>Client: HTTP Response
```

[![](https://mermaid.ink/img/pako:eNqNU01rwzAM_SvGp411f8CHwmgZvW2kPY1cjK22hsTKbHlQSv_7lDoNJR-lgYAtPT2_J8tnadCCVDLCbwJvYO30Iei69IK_RgdyxjXak1hVDjyN4x9NMw5-BQshrtBTwKqCMEEXQBNccSusa-3thv9J6BX0qQ1hOI2zaxcNJk9bCH_OQOkzJMt9Xy7fWKASm93uWxStx0jiJR-eiV8znlEteChciQITQwlnPA2jLcmsN9ZxXUy471TPVfbauj4oce_hTkqXZ_wDFQVQCv6-9uHBgxartlnVqe98ZhiAnhJwqwH7rJaJ-8lUBcRU0eyd5HHo5yA26CPIhawh1NpZfgDntraUdIQaSql4aWGvW05Z-gtDdSLcnryRikKChUyNZZnde5Fqr6vI0YDpcOx3PKE_iLfs5R-X7DhH?type=png)](https://mermaid.live/edit#pako:eNqNU01rwzAM_SvGp411f8CHwmgZvW2kPY1cjK22hsTKbHlQSv_7lDoNJR-lgYAtPT2_J8tnadCCVDLCbwJvYO30Iei69IK_RgdyxjXak1hVDjyN4x9NMw5-BQshrtBTwKqCMEEXQBNccSusa-3thv9J6BX0qQ1hOI2zaxcNJk9bCH_OQOkzJMt9Xy7fWKASm93uWxStx0jiJR-eiV8znlEteChciQITQwlnPA2jLcmsN9ZxXUy471TPVfbauj4oce_hTkqXZ_wDFQVQCv6-9uHBgxartlnVqe98ZhiAnhJwqwH7rJaJ-8lUBcRU0eyd5HHo5yA26CPIhawh1NpZfgDntraUdIQaSql4aWGvW05Z-gtDdSLcnryRikKChUyNZZnde5Fqr6vI0YDpcOx3PKE_iLfs5R-X7DhH)

## 2

```
    sequenceDiagram
        participant C as CreateOrderCommandHandler
        participant Q as FindOrderQueryHandler
        participant F as OrderFactory
        participant D as DiscountService
        participant O as OrderCommandRepository
        participant R as OrderQueryRepository
        participant E as EventStore
        participant M as MaterializedOrder
        participant En as OrderEntity
        participant Ei as OrderItemEntity
        participant Ed as DiscountEntity

        C ->> F: create(command)
        F ->> En: create OrderEntity
        F ->> Ei: create OrderItemEntity
        F ->> Ed: create DiscountEntity
        C ->> D: applyDiscount(order, discount)
        C ->> O: save(order)
        O ->> En: save OrderEntity
        O ->> Ei: save OrderItemEntity
        O ->> Ed: save DiscountEntity
        C ->> O: order.commit()
        
        Q ->> R: findById(query.orderId)
        Q ->> E: getEvents(query.orderId)
        E ->> Q: return events
        Q ->> M: appendEvents(events, order)
        Q ->> R: save(order)
        R ->> M: save MaterializedOrder
```

[![](https://mermaid.ink/img/pako:eNp9lMGOgjAURX-l6UoTxw_owsUoZFwYou4mbJr2qU2gxdKaMMZ_n7ZAZQSHBEJ5h_tuLy_cMVMcMME1XC1IBhtBz5qWuUTuqKg2gomKSoPWiNZorYEayDQHvVZlSSX_cmcBeszvPZ8KyQO9t6Cbt2zq2cCllBmlmzGy8chG1ExZaY6gb4LBmMqiUGfvAJWqxbTkIcLB3X9o4tHkBq61AyYa7zywc9loQQvxA-2uJ4RkbJpII8xULxGRrYHyLcaHifRUy63Rx2qFUoJY-F4z1oYxb6tpqCayL4_tdIT4S7y66SgeqVczTysbgmhVFU1PzJQXXCDeredDOCOopjdoma6SRc--NHacRcfP-qvfLPoNzHu3zkDovfS5CTPrPLTXfUAOBJ3cbH82Wz67-ulZhje2fcYtlRB0BhPmpp7EkoDtCdJgrJYIAjqU2IXkQPJOpSUWaBhOtDSK7dBrhB2P5hMvcAm6pIK7P8Ddv5Jjc4ESckzcLYcTtYXJcS4fDqXWqGMjGSZGW1hgW3En2P0wMDnRonZPtbLnS1y5Uf1Wqq8-fgFT-nho?type=png)](https://mermaid.live/edit#pako:eNp9lMGOgjAURX-l6UoTxw_owsUoZFwYou4mbJr2qU2gxdKaMMZ_n7ZAZQSHBEJ5h_tuLy_cMVMcMME1XC1IBhtBz5qWuUTuqKg2gomKSoPWiNZorYEayDQHvVZlSSX_cmcBeszvPZ8KyQO9t6Cbt2zq2cCllBmlmzGy8chG1ExZaY6gb4LBmMqiUGfvAJWqxbTkIcLB3X9o4tHkBq61AyYa7zywc9loQQvxA-2uJ4RkbJpII8xULxGRrYHyLcaHifRUy63Rx2qFUoJY-F4z1oYxb6tpqCayL4_tdIT4S7y66SgeqVczTysbgmhVFU1PzJQXXCDeredDOCOopjdoma6SRc--NHacRcfP-qvfLPoNzHu3zkDovfS5CTPrPLTXfUAOBJ3cbH82Wz67-ulZhje2fcYtlRB0BhPmpp7EkoDtCdJgrJYIAjqU2IXkQPJOpSUWaBhOtDSK7dBrhB2P5hMvcAm6pIK7P8Ddv5Jjc4ESckzcLYcTtYXJcS4fDqXWqGMjGSZGW1hgW3En2P0wMDnRonZPtbLnS1y5Uf1Wqq8-fgFT-nho)