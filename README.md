# The Ridges Summerlin Luxury Real Estate

A comprehensive luxury real estate platform for The Ridges Summerlin, offering advanced property search, detailed community insights, and interactive market tools designed to enhance the home buying experience.

## Features

- **Modern User Interface**: Clean, responsive design with intuitive navigation
- **Property Listings**: Integration with RealScout for dynamic property listings
- **Advanced Home Valuation**: Homebot's AI-powered home valuation tool for lead generation
- **CRM Integration**: Seamless lead management with Follow Up Boss CRM
- **Resource Center**: Comprehensive guides and tools for buyers and sellers
- **Community Information**: Detailed insights about The Ridges Summerlin area
- **Interactive Calculators**: Mortgage and investment calculators for prospective buyers
- **Blog Section**: Updated real estate market content via RSS feed integration

## Technology Stack

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS with custom components
- **State Management**: React Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Custom component library built on Radix UI primitives
- **API Integration**: Axios for HTTP requests

## Integrations

- **RealScout**: Property listing integration
- **Homebot**: AI-powered home valuation tool
- **Follow Up Boss**: CRM for lead management
- **SimplifyingTheMarket**: RSS feed for blog content

## Setup Instructions

### Prerequisites
- Node.js (v20+)
- npm or yarn

### Installation
1. Clone the repository:
```
git clone https://github.com/DrJanDuffy/TheRidgesHomes.git
cd TheRidgesHomes
```

2. Install dependencies:
```
npm install
```

3. Create .env file with required API keys:
```
FOLLOW_UP_BOSS_API_KEY=your_key_here
```

4. Start the development server:
```
npm run dev
```

## Project Structure

- `/client`: Frontend React application
  - `/src/components`: Reusable UI components
  - `/src/pages`: Application pages
  - `/src/lib`: Utility functions and constants
  - `/src/hooks`: Custom React hooks
- `/server`: Backend Express server
  - `/services`: External service integrations
- `/shared`: Shared types and schemas between client and server

## Legal Information

- This project contains trademarks that are the property of their respective owners:
  - "Summerlin" is a registered trademark of The Howard Hughes Company, LLC
  - "REALTOR®" is a registered trademark of the National Association of REALTORS®
  - Equal Housing Opportunity statements and logos are used in compliance with Fair Housing Act requirements

## License

This project is private and proprietary, owned by Dr. Jan Duffy, Berkshire Hathaway HomeServices.

## Contact

For questions or support, please contact:
- Dr. Jan Duffy, REALTOR®
- Berkshire Hathaway HomeServices Nevada Properties
- Email: info@theridgessummerlinhomes.com
- Phone: (702) 234-5678