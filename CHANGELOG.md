# CHANGELOG
All notable changes to this project will be documented in this file.

The changelog format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [v1.1.3][v1.1.3] - 8-Dec-2021

Package  | Version  | Link
---|---|---
REST Core| v2.4.0 | catapult-rest
SDK Core| v1.0.3 | symbol-sdk

### Added
- Support new transaction type (revokable) [#959](https://github.com/symbol/symbol-explorer/issues/959)
- Testnet theme [#971](https://github.com/symbol/symbol-explorer/pull/971)
- Add mosaic flag on the mosics list [#980](https://github.com/symbol/symbol-explorer/pull/980)
- Openapi client integrated for statistics-service [#987](https://github.com/symbol/symbol-explorer/issues/987)

### Update
- Update transaction graphic [#976](https://github.com/symbol/symbol-explorer/pull/976)
- Update interface enhancement [#981](https://github.com/symbol/symbol-explorer/pull/981)
- Pagination enhancement [#985](https://github.com/symbol/symbol-explorer/pull/985)
- Update mobile view table fields [#986](https://github.com/symbol/symbol-explorer/pull/986)
- Footer enhancement [#990](https://github.com/symbol/symbol-explorer/pull/990)
- Disable toggle theme [#991](https://github.com/symbol/symbol-explorer/pull/991])
- Update RU translation
- Update JA translation

### Fixed
- Invalid prop: type check failed for prop "transactionType" [#963](https://github.com/symbol/symbol-explorer/issues/963)
- Unknown custom element [#964](https://github.com/symbol/symbol-explorer/issues/964)
- Partial transactions cannot be viewed in Explorer [#972](https://github.com/symbol/symbol-explorer/issues/972)
- Mosaic Address Restriction transaction graphic [#978](https://github.com/symbol/symbol-explorer/issues/978)

## [v1.1.2][v1.1.2] - 11-Nov-2021

Package  | Version  | Link
---|---|---
REST Core| v2.3.8 | catapult-rest
SDK Core| v1.0.2 | symbol-sdk

### Added
- Introduce dark mode [#958](https://github.com/symbol/symbol-explorer/pull/958)

### Fixed
- Minor typos in CHANGELOG.md [#957](https://github.com/symbol/symbol-explorer/pull/957)

## [v1.1.1][v1.1.1] - 31-Oct-2021

Package  | Version  | Link
---|---|---
REST Core| v2.3.7 | catapult-rest
SDK Core| v1.0.2 | symbol-sdk

### Added
- Add app version on footer [#931](https://github.com/symbol/symbol-explorer/pull/931)
- Enable https [#927](https://github.com/symbol/symbol-explorer/issues/927)
- Enable Russian language [#949](https://github.com/symbol/symbol-explorer/pull/949)
- Symbol SDK v1.0.2 [#953](https://github.com/symbol/symbol-explorer/pull/953)

### Fixed
- Mosaic preview popover [#915](https://github.com/symbol/symbol-explorer/pull/915)
- Add server response Cache-Control header [#917](https://github.com/symbol/symbol-explorer/pull/917)
- Added missing network types [#919](https://github.com/symbol/symbol-explorer/pull/919)
- Transaction sent to expired alias is not loading [#928](https://github.com/symbol/symbol-explorer/issues/928)
- Update RU translation.
- Minor translation fix [#940](https://github.com/symbol/symbol-explorer/pull/940)

### Removed
- Node reward program [#945](https://github.com/symbol/symbol-explorer/issues/945)
- Hardcoded node list [#942](https://github.com/symbol/symbol-explorer/issues/942)

## [v1.1.0][v1.1.0] - 2-June-2021

### Milestone: catapult-server@v1.0.0.0

Package  | Version  | Link
---|---|---
REST Core| v2.3.6 | catapult-rest
SDK Core| v1.0.1 | symbol-sdk

### Added
- Showing all receipts associated with an account [#857](https://github.com/nemgrouplimited/symbol-explorer/issues/857)
- Numbering of the addresses (Rich List) [#851](https://github.com/nemgrouplimited/symbol-explorer/issues/851)
- Showing rest server version on node list [#856](https://github.com/nemgrouplimited/symbol-explorer/issues/856)
- Export CSV feature in Explorer nodes list [#846](https://github.com/nemgrouplimited/symbol-explorer/issues/846)
- Node Rewards Enrollment views [#884](https://github.com/nemgrouplimited/symbol-explorer/pull/884)
- Validation Log fields to the Node Rewards widget [#893](https://github.com/nemgrouplimited/symbol-explorer/issues/893)
- Support of the MonitorOnly program [#892](https://github.com/nemgrouplimited/symbol-explorer/issues/892)
- Search accounts by public key [#854](https://github.com/nemgrouplimited/symbol-explorer/issues/854)
- Support of the EarlyAdoption and Ecosystem reward programs [#899](https://github.com/nemgrouplimited/symbol-explorer/pull/899)

### Fixed
- When viewing tx “show details” on mobile no way to exit details. [#829](https://github.com/nemgrouplimited/symbol-explorer/issues/829)
- Disable onRowClickKey on table list view [#862](https://github.com/nemgrouplimited/symbol-explorer/issues/862)
- Failed to fetch transaction list in Partial filter [#864](https://github.com/nemgrouplimited/symbol-explorer/issues/864)
- Harvesting fees not presented for pretty address in url [#867](https://github.com/nemgrouplimited/symbol-explorer/issues/867)
- Minior issue of Account Detail page [#871](https://github.com/nemgrouplimited/symbol-explorer/issues/871)
- Block creation time is displayed incorrectly for a short time [#873](https://github.com/nemgrouplimited/symbol-explorer/issues/873)
- Pagination. The last page issue [#882](https://github.com/nemgrouplimited/symbol-explorer/issues/882)
- Broken titles for custom table field components [#885](https://github.com/nemgrouplimited/symbol-explorer/issues/885)
- Transaction details for the partial group is not shown [#828](https://github.com/nemgrouplimited/symbol-explorer/issues/828)
- Fix: security vulnerabilities in your dependencies. [#898](https://github.com/nemgrouplimited/symbol-explorer/pull/898)

## [v1.0.1][v1.0.1] - 21-Mar-2021

### Milestone: catapult-server@v1.0.0.0

Package  | Version  | Link
---|---|---
REST Core| v2.3.4 | catapult-rest
SDK Core| v1.0.0 | symbol-sdk

- Remove the node peer status
- Add message for the NIS1 address search attempt [#830](https://github.com/nemgrouplimited/symbol-explorer/issues/830)
- Sort nodes by friendly name [#831](https://github.com/nemgrouplimited/symbol-explorer/issues/831)
- Display UTC time and timestamp in the detail pages [#840](https://github.com/nemgrouplimited/symbol-explorer/issues/840)

## [v1.0.0][v1.0.0] - 15-Mar-2021

### Milestone: catapult-server@v1.0.0.0

Package  | Version  | Link
---|---|---
REST Core| v2.3.4 | catapult-rest
SDK Core| v1.0.0 | symbol-sdk

- Symbol mainnet launch release
- Updated T&C and Privacy Policy
- Added recipient and amount columns to the account transaction list [#826](https://github.com/nemgrouplimited/symbol-explorer/issues/826)

## [v0.10.0][v0.10.0] - 12-Mar-2021

### Milestone: catapult-server@v0.10.0.8

Package  | Version  | Link
---|---|---
REST Core| v2.3.3 | catapult-rest
SDK Core| v0.23.3 | symbol-sdk

### Added
- Added compatibility for 0.10.0.8 server.
- Added Testnet theme [#819](https://github.com/nemgrouplimited/symbol-explorer/pull/819)
- Added the Privacy Policy link [#819](https://github.com/nemgrouplimited/symbol-explorer/pull/819)

### Fixed
- UI home page issues [#795](https://github.com/nemgrouplimited/symbol-explorer/issues/795)
- Node Rewards Widget. Handle the no rounds state [#796](https://github.com/nemgrouplimited/symbol-explorer/issues/796)
- Transaction Graphic and Transaction Detail. The mosaic preview bug [#798](https://github.com/nemgrouplimited/symbol-explorer/issues/798)
- Transaction List. Native mosaic shown as custom mosaic [#800](https://github.com/nemgrouplimited/symbol-explorer/issues/800)
- No different separators under Reported Balance (Node Rewards Program Range display)  [#802](https://github.com/nemgrouplimited/symbol-explorer/issues/802)
- Detail display "Host Location" is not displayed correctly. The last character of the address is also missing.  [#803](https://github.com/nemgrouplimited/symbol-explorer/issues/803)
- In explorer, not all valid namespaces are displayed in the details view. [#804](https://github.com/nemgrouplimited/symbol-explorer/issues/804)
- Account Details. Invalid address display [#807](https://github.com/nemgrouplimited/symbol-explorer/issues/807)
- Transaction icons are different from those used in wallets [#810](https://github.com/nemgrouplimited/symbol-explorer/issues/810)
- Fetch node rewards data directly from the controller. Use main public key [#815](https://github.com/nemgrouplimited/symbol-explorer/issues/815)


## [v0.9.0][v0.9.0] - 25-Feb-2021

### Milestone: catapult-server@v0.10.0.7

Package  | Version  | Link
---|---|---
REST Core| v2.3.3 | catapult-rest
SDK Core| v0.23.3-alpha| symbol-sdk

### Added
- Added compatibility for 0.10.0.7 server.
- Added add two column bar graphs of node heights [#755](https://github.com/nemgrouplimited/symbol-explorer/issues/755)
- Node list and statistics enhancement [#777](https://github.com/nemgrouplimited/symbol-explorer/pull/777)
- Added Node Reward Section [#791](https://github.com/nemgrouplimited/symbol-explorer/pull/791)


### Fixed
- Chart: Change window of block time differences [#759](https://github.com/nemgrouplimited/symbol-explorer/issues/759)
- Display comfirmation date and block height in transaction list.[#765](https://github.com/nemgrouplimited/symbol-explorer/issues/765)
- Read native namespace from config [#769](https://github.com/nemgrouplimited/symbol-explorer/issues/769)
- I can't see a transactionInfo by explorer [#775](https://github.com/nemgrouplimited/symbol-explorer/issues/775)
- If namespaces consist of only one letter or number, they will not be displayed correctly. [#779](https://github.com/nemgrouplimited/symbol-explorer/issues/779)
- Some headers don't look nice when cut off [#741](https://github.com/nemgrouplimited/symbol-explorer/issues/741)
- Mark clearly expired mosaics [#785](https://github.com/nemgrouplimited/symbol-explorer/issues/785)
- Get nodePublicKey for NR [#786](https://github.com/nemgrouplimited/symbol-explorer/issues/786)
- NR widget. Handle missing test results [#787](https://github.com/nemgrouplimited/symbol-explorer/issues/787)
- Fix node version output [#788](https://github.com/nemgrouplimited/symbol-explorer/issues/788)
- VotingPayouts [#790](https://github.com/nemgrouplimited/symbol-explorer/issues/790)


## [v0.8.0][v0.8.0] - 16-Jan-2021

### Milestone: catapult-server@v0.10.0.5

Package  | Version  | Link
---|---|---
REST Core| v2.3.0 | catapult-rest
SDK Core| v0.23.0 | symbol-sdk

### Added
- Added compatibility for 0.10.0.5 server.
- Update SDK. [#753](https://github.com/nemgrouplimited/symbol-explorer/issues/753)

### Fixed
- Removed NEM Foundation in Explorer [#748](https://github.com/nemgrouplimited/symbol-explorer/issues/748)
- Do not expose whole ENV in /config [#754](https://github.com/nemgrouplimited/symbol-explorer/issues/754)
- Minor bug in explorer

## [v0.7.1][v0.7.1] - 19-Dec-2020

### Milestone: catapult-server@v0.10.0.4

Package  | Version  | Link
---|---|---
REST Core| v2.2.0 | catapult-rest
SDK Core| v0.22.2 | symbol-sdk

### Added
- Added server. Read config from environment variables [#728](https://github.com/nemgrouplimited/symbol-explorer/issues/728)

### Fixed
- Add important block info in block detail. [#736](https://github.com/nemgrouplimited/symbol-explorer/issues/736)
- States my balance as 500,000 XYM. It isn't. [#742](https://github.com/nemgrouplimited/symbol-explorer/issues/742)
- Every harvest fee are same price in one block. [#743](https://github.com/nemgrouplimited/symbol-explorer/issues/743)
- Account Details. The loading never ends with invalid param. [#731](https://github.com/nemgrouplimited/symbol-explorer/issues/731)
- Misspelling at Transaction Detail. [#745](https://github.com/nemgrouplimited/symbol-explorer/issues/745)
- Account details. Fetch info by alias. [#730](https://github.com/nemgrouplimited/symbol-explorer/issues/730)

## [v0.7.0][v0.7.0] - 9-Dec-2020

### Milestone: catapult-server@v0.10.0.4

Package  | Version  | Link
---|---|---
REST Core| v2.2.0 | catapult-rest
SDK Core| v0.22.2 | symbol-sdk

### Added
- Added compatibility for 0.10.0.4 server.
- Add extra graph info into transaction list [#709](https://github.com/nemgrouplimited/symbol-explorer/pull/709)
- Display node type on base info widget (Voting node / non voting node) [#723](https://github.com/nemgrouplimited/symbol-explorer/pull/723)
- View receipt info in detail page such as Account, Block, Mosaic and Namespace [#716](https://github.com/nemgrouplimited/symbol-explorer/pull/716)
- Display more than 1 alias name in listing or detail page. [#716](https://github.com/nemgrouplimited/symbol-explorer/pull/717)
- New message component [#724](https://github.com/nemgrouplimited/symbol-explorer/pull/724)

### Fixed
- Finalized Blocks are not up to date [#675](https://github.com/nemgrouplimited/symbol-explorer/issues/675)
- Replace hardcoded XYM text from i18n properties [#684](https://github.com/nemgrouplimited/symbol-explorer/issues/684)
- Addresses are not displayed correctly [#701](https://github.com/nemgrouplimited/symbol-explorer/issues/701)
- Transaction Detail. Doesn't display info for some transactions [#703](https://github.com/nemgrouplimited/symbol-explorer/issues/703)
- Display all transactions at one page for an account [#704](https://github.com/nemgrouplimited/symbol-explorer/issues/704)
- Namespace Detail. Handle expired namespace. [#705](https://github.com/nemgrouplimited/symbol-explorer/issues/705)
- TG. Aggrate Bonded icon missing. [#706](https://github.com/nemgrouplimited/symbol-explorer/issues/706)
- Only one account alias is presented. [#714](https://github.com/nemgrouplimited/symbol-explorer/issues/714)
- Minor change for CR. [#718](https://github.com/nemgrouplimited/symbol-explorer/issues/718)
- Account Detail. metadata is missing. [#725](https://github.com/nemgrouplimited/symbol-explorer/issues/725)


## [v0.6.2][v0.6.2] - 19-Oct-2020

### Milestone: catapult-server@v0.10.0.3

Package  | Version  | Link
---|---|---
REST Core| v2.1.0 | catapult-rest
SDK Core| v0.21.0 | symbol-sdk

### Added
- Completed Transaction Graphic widget [#547](https://github.com/nemgrouplimited/symbol-explorer/issues/547)
- Improved the Node Pages [#677](https://github.com/nemgrouplimited/symbol-explorer/pull/677)
  - Added the Node Map Widget to display node host location.
  - Getting the full node list from the Statistics Service.
  - Added filter by node roles.
  - Added the Node Detail page.
  - Added the Peer and API Node status check.
- Improved table navigation experience. [#688](https://github.com/nemgrouplimited/symbol-explorer/pull/688)

### Fixed
- Namespaces List. Showing wrong Expiration and Expiration Date [#644](https://github.com/nemgrouplimited/symbol-explorer/issues/644)
- Problem with presenting address without outgoing transactions. [#663](https://github.com/nemgrouplimited/symbol-explorer/issues/663)
- Problem with displaying account detail. [#638](https://github.com/nemgrouplimited/symbol-explorer/issues/638)
- Page Assembler 'adaptive' card layout.
- Fixes wrong display expiration date in the namespace list on the private network. [#686](https://github.com/nemgrouplimited/symbol-explorer/pull/686)

## [v0.6.1][v0.6.1] - 2-Oct-2020

### Milestone: catapult-server@v0.10.0.3

Package  | Version  | Link
---|---|---
REST Core| v2.1.0 | catapult-rest
SDK Core| v0.21.0 | symbol-sdk

### Added
- Added reusable component for Transaction Graphic.
- Added Transaction Graphic widget to visualize transaction info
    - AccountAddressRestrictionTransaction
    - AccountMosaicRestrictionTransaction
    - AccountOperationRestrictionTransaction
    - MosaicGlobalRestrictionTransaction
    - MosaicAddressRestrictionTransaction

### Update
-  Change finality lock icon [#641](https://github.com/nemgrouplimited/symbol-explorer/issues/641)

### Fixed
- Rich list showing empty [#644](https://github.com/nemgrouplimited/symbol-explorer/issues/644)
- No. of transactions missing in blocks list table.


## [v0.6.0][v0.6.0] - 26-Sep-2020

### Milestone: catapult-server@v0.10.0.3

Package  | Version  | Link
---|---|---
REST Core| v2.1.0 | catapult-rest
SDK Core| v0.21.0 | symbol-sdk

### Added
- Added compatibility for 0.10.0.3 server.
- Added Secret Hash information in Account Detail page.
- Added Hash Lock information in Account Detail page.
- Added Hash Lock information in transaction details.
- Added Mosaic Address Restrictions information in Account Detail page.
- Added Transaction Graphic widget to visualize transaction info
    - HashLockTransaction
    - SecretLockTransaction
    - SecretProofTransaction
    - AccountKeyLinkTransaction
    - NodeKeyLinkTransaction
    - VotingKeyLinkTransaction
    - VrfKeyLinkTransaction
    - MosaicDefinitionTransaction
    - MosaicSupplyChangeTransaction
- Added Finality block height in Base Info widget.
- Added Finality Status compoment beside the block height showing block Pending or Finalized.
- Added more japanese translations (Thanks @44uk).

### Update
- Refactor Transaction graphic widget and schema
- Refactor Pagination related to SDK change
- Refactor ChainService related to SDK change.
- Refactor RestrictionService related to SDK change

### Fixed
- TransactionDetail. Loading never ends [#615](https://github.com/nemgrouplimited/symbol-explorer/issues/615)
- Aggregate inner transaction are not formatted [#618](https://github.com/nemgrouplimited/symbol-explorer/issues/618)


## [v0.5.0][v0.5.0] - 15-Aug-2020

### Milestone: catapult-server@v0.9.6.4

Package  | Version  | Link
---|---|---
REST Core| v1.2.0 | catapult-rest
SDK Core| v0.20.7 | symbol-sdk

### Added
- Added compatibility for 0.9.6.4 server.
- Added search Criteria for Blocks, Accounts, Namespaces, Transactions and Mosaics.
- Added PageAssembler component.
- Added Transaction filter component into transaction list.
- Added resolved address in transaction list and transaction detail page.
- Added more transaction test case for cypress e2e.
- Added Transaction Graphic widget to visualize transaction info
    - Address Alias
    - Mosaic Alias
    - Namespace Registration
    - TransferTransaction
- Added account filter component into account list.
- Added supplemental Keys info into Account Detail page.
- Added harvested info into Account Detail page.
- Added namespace filter component into namespace list.
- Added namespace name into alias transaction detail page.
- Added Merkle-tree infomation into Block Detail page.
- Added more japanese translations (Thanks @44uk).

### Update
- Refactor infrastructure to use `repositoryFactory`
- Refactor statistics chart effect.
- Load network config from network.
- Enhanced mobile view experience.

### Fixed
- Pagination. Block-list live update does not work [#555](https://github.com/nemgrouplimited/symbol-explorer/issues/555)
- Multisig account not showing correctly [#559](https://github.com/nemgrouplimited/symbol-explorer/issues/559)
- Transaction Detail. Unable to show the data [#562](https://github.com/nemgrouplimited/symbol-explorer/issues/562)
- Transaction Detail. Missing address in address alias [#534](https://github.com/nemgrouplimited/symbol-explorer/issues/534)
- PageAssembler. Mobile view doesn't work properly [#533](https://github.com/nemgrouplimited/symbol-explorer/issues/533)

## [v0.4.0][v0.4.0]

### Milestone: catapult-server@v0.9.5.1

### Added
- Adding Russian translation [#448](https://github.com/nemfoundation/symbol-explorer/issues/448)
- Upgrade to testnet 0.9.5.1 with SDK v0.19.2 [#472](https://github.com/nemfoundation/symbol-explorer/issues/472)

### Fixed
- Network type issue in account link addresses [#434](https://github.com/nemfoundation/symbol-explorer/issues/434)
- Failed to fetch account detail - TooManyRequests [#438](https://github.com/nemfoundation/symbol-explorer/issues/438)
- Move filters to config file [#460](https://github.com/nemfoundation/symbol-explorer/issues/460)
- Mosaic table relative amounts formatting consistency [#468](https://github.com/nemfoundation/symbol-explorer/issues/468)


## [v0.3.0][v0.3.0]

### Milestone: catapult-server@v0.9.4.1

#### Added

- Upgrade SDK to v0.18.0 [#408](https://github.com/nemfoundation/symbol-explorer/issues/408)
- Transaction type icons [#424](https://github.com/nemfoundation/symbol-explorer/issues/424)

#### Fixed
- Fixed minor bug fix [PR #421](https://github.com/nemfoundation/symbol-explorer/pull/421)
- Fixed Missing mosaic Restriction list [#426](https://github.com/nemfoundation/symbol-explorer/issues/426)
- Fixed Missing account metadata entries [#428](https://github.com/nemfoundation/symbol-explorer/issues/428)
- Fixed Missing namespace Alias in Account [#433](https://github.com/nemfoundation/symbol-explorer/issues/433)
- Fixed Network type issue in account link addresses [#434](https://github.com/nemfoundation/symbol-explorer/issues/434)


[v0.3.0]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v0.3.0
[v0.4.0]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v0.4.0
[v0.5.0]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v0.5.0
[v0.6.0]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v0.6.0
[v0.6.1]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v0.6.1
[v0.6.2]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v0.6.2
[v0.7.0]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v0.7.0
[v0.7.1]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v0.7.1
[v0.8.0]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v0.8.0
[v0.9.0]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v0.9.0
[v0.10.0]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v0.10.0
[v1.0.0]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v1.0.0
[v1.0.1]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v1.0.1
[v1.1.1]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v1.1.1
[v1.1.2]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v1.1.2
[v1.1.3]: https://github.com/nemfoundation/symbol-explorer/releases/tag/v1.1.3
