# Welcome to Africanvas

Africanvas is art commissioning platform that harnesses the power of AI and blockchain technology to create new opportunities for artists and art enthusiasts across Africa and beyond. Traditional art commissioning often involves complex and unclear communication between clients and artists, leading to unmet expectations and missed opportunities. By addressing this gap, Africanvas is transforming the art market and creating sustainable economic growth.

Africanvas introduces a market-creating innovation by making art commissioning more accessible, transparent, and efficient. The platform leverages AI to generate images based on clients' descriptions, matching the artistic style of their chosen artists. This innovation allows more people, especially those previously unable to afford or navigate the complexities of art commissioning, to engage with artists directly. By doing so, Africanvas is unlocking a vast new market of art lovers and potential clients who were previously underserved - aligning with the Prosperity Paradox . By simplifying how clients and artists connect, Africanvas unlocks new economic opportunities, driving demand for skilled artists and digital infrastructure without relying on external aid or reforms. This market-driven approach empowers artists with secure income streams and fosters economic growth, embodying the Prosperity Paradox’s principle that true prosperity comes from innovations that create new markets and drive institutional evolution as a byproduct of this growth.

On Africanvas, artists set their own price ranges and choose whether to accept or reject commission requests, empowering them with control and autonomy. Clients, in turn, can clearly describe their expectations and set their budget, making the commissioning process straightforward and transparent. An escrow smart contract ensures that the payment process is secure, building trust between both parties and removing the risk of non-payment or disputes.

## How Africanvas Works:

AI-Generated Previews: Clients provide a description of their desired artwork. An AI model, powered by Astria's Stable Diffusion API, generates a preview image in the artist’s style, ensuring alignment with the client’s vision.

Commission Negotiation: Clients select a budget within the artist's price range. Artists review and accept or reject commission requests based on the offer.

Secure Escrow System: Accepted commissions are backed by a Solidity smart contract on Base and Optimism, holding payments in escrow until the artwork is completed.

Completion and Payment: Upon completion, the payment is released to the artist. If the commission isn’t fulfilled, the escrow system returns the funds to the client.

## Built with Cutting-Edge Technology:

Africanvas combines the latest in web development, AI, and blockchain:

**Next.js** for a dynamic and user-friendly interface.

**MongoDB** for secure and scalable data management.

**Solidity** Smart Contracts deployed on Base and Optimism for secure transactions.

**Astria Stable Diffusion API** for AI-powered image generation.

## Smart Contracts

AfricanvasEscrow contract on Base Sepolia: 0x92B9AaC41F5e53A693109d92652a1E41EC939e0E
AfricanvasEscrow contract on Optimism Sepolia: 0x261A2Fef773DF2F4909eCA15309915B0903a2c31

## Run it locally

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Licence

**MIT**
