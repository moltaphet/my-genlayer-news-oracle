#!/bin/bash
CODE=$(base64 -i NewsContract.py | tr -d '\n' | tr -d '\r')
curl -v -X POST http://localhost:8081 \
-H "Content-Type: application/json" \
-d "{\"jsonrpc\":\"2.0\",\"method\":\"gen_deployContract\",\"params\":[\"$CODE\"],\"id\":1}"clear