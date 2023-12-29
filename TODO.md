# API:

- [DONE] Review stamps/[id] and cursed/[id]
  - add into cursed and stamps query folders
  - join issuances to update supply and locked status
  - divisibility 🤯
  - Reissuance problem when querying by stamp number or tx_hash
- [DONE] Add retry in handleQuery and connectDb
- [WIP] Blocks endpoint:
  - [DONE] create blocks_api file to host the query logic that will use api and
    pages in the explorer
  - [WIP]related blocks to show previous and next block for a given one
  - [TODO]add to block queries to be able to search by hash
- [TODO] Other endpoints:
  - [TODO] Migrate all the logic from enpoints to its own file to be reused by
    pages and endpoint

# EXPLORER:

- [DONE] Retrieve images from the static/stamps folder
- [DONE] new images are not being updated.... need to restart the container to
  be updated, asking for solutions to this...
- [WIP] Balance page
- [WIP] Wallet integration:
  - [DONE] Unisat
  - [DONE] Leather
  - [WIP] OKX
- [TODO] Minting functions
- [TODO] Work on blocks page
- [TODO] Work on index page
- [TODO] Work on stamp page
- [TODO] tons of work...

# SRC20:

- GET[tx_hash] return src20 transaction info (fromAddress, toAddress, op,
  validity)
- GET[address][tick] return balance for this address and tick
  - remove cpid from the result(is noise for them)
- GET[block_index] return all valid tx for src20 in that block
- POST[{ "method": "mint"|"transfer"|"deploy", params: [] }]
  - check if is a valid posible tx
  - create unsigned transaction
