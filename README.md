# StrØ decentralized Application

The StrØ decentralized application aims to lessen the use of straws by incentivizing customers who opt out for straws.

### TestNet Deployment Details (Ropsten)

#### stroFactory Contract Dashboard Deployment

   transaction hash:              0xb235ed35e24e8d3c3b811ddf72611890dbda57abf8e5b187b3676fc37afb13dc<br>
   Dashboard contract address:    0x729d5f93149e8e03851015a67c5fcde799ebc487<br>
   block number:                  6202635

#### Background

In 2015, a video of a turtle with a plastic straw is stuck into its nostrils went viral. Since the released of the clip, there are several campaigns on the prevention of the use of the plastic straws. Plastics, in general, kills up to 1 million sea birds, 100,000 sea mammals, marine turtles, and fishes each year  

Some of the countries have already implemented campaign towards non-use of plastic straws. In late 2018, several fastfood establishments and restaurants in Singapore has banned the use of plastic straw. But this effort has sparked backlash from some consumers who felt that they are inconvencienced.

To further this campaign and to entice consumers to say no to plastic straws especially when dining out, StrØ is a decentralized application to say “No to Straw.” This dApp will incentivize fastfood and restaurant customers, when they opt out from using plastic straws, with points which they can redeem to purchase for other food products on the catalogue for the restaurants / fast food where they earned their points.

#### Decentralized applications
  - Smart Contract developed on Solidity utilizing Factory Contract, State Channels, Signing and Verification
  - Front-end developed using React, Bulma, Material-ui and deployed on GitHub pages
  - Database using Firebase Function Hosting
  - Back-End Repository: https://github.com/abielvillarosa/strodapp-backend
  
#### Workflow
  - Restaurant user to click on "Register as Restaurant"
  - Restaurant user to add new products to register products on the database
  - Restaurant user to Add New Customer by providing customer EOA
  - Restaurant user to Stamp points for customer
  - Customer to redeem points based on specific product depending on points availability
