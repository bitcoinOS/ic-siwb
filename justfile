deploy_provider:
    dfx deploy ic_siwb_provider --argument  '(record{domain= "localhost:5173";uri="http://localhost:5173";salt="2344";network=opt "testnet";scheme=opt "http"})'

deploy_provider_ic:
    dfx deploy ic_siwb_provider --ic --argument  '(record{domain= "testnet.bifipal.com";uri="https://testnet.bifipal.com";salt="2344";network=opt "testnet";scheme=opt "https"})'
