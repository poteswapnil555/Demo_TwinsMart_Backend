# E-Commerce Backend API (TypeScript Version)

This is a **TypeScript Node.js Express backend API** for an e-commerce application. It integrates **MongoDB**, **Redis**, **Stripe**, and **Cloudinary** to support **user management**, **product handling**, **order processing**, **payments**, and **dashboard statistics**.

---

## 🛠️ Tech Stack

* **Node.js** with **Express** (TypeScript)
* **MongoDB** via Mongoose
* **Redis** for caching/session
* **Stripe** for payment processing
* **Cloudinary** for image uploads
* **dotenv**, **morgan**, **cors** for environment config, logging, and CORS handling
* **TypeScript** for static typing and better development experience

---

## 📁 Project Structure

```
├── src/
│   ├── routes/
│   │   ├── user.route.ts
│   │   ├── product.route.ts
│   │   ├── order.route.ts
│   │   ├── payment.route.ts
│   │   └── stats.route.ts
│   ├── middlewares/
│   │   └── error.middleware.ts
│   ├── utils/
│   │   └── features.ts
│   ├── index.ts
│   ├── app.ts
├── .env
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/poteswapnil555/Demo_TwinsMart_Backend.git
cd Demo_TwinsMart_Backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create .env File

```env
PORT=4000
MONGO_URI=your_mongo_connection_string
REDIS_URI=your_redis_connection_string
STRIPE_KEY=your_stripe_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
CLIENT_URL=http://localhost:3000
REDIS_TTL=14400
```

### 4. Build and Run the Server

```bash
npm run build
npm start
```

Server will be available at:

```
http://localhost:4000
```

---

## 🚀 API Endpoints

| Route           | Path Prefix         | Description              |
| --------------- | ------------------- | ------------------------ |
| User            | `/api/v1/user`      | User auth, profile, etc. |
| Product         | `/api/v1/product`   | Product CRUD operations  |
| Order           | `/api/v1/order`     | Order management         |
| Payment         | `/api/v1/payment`   | Stripe integration       |
| Dashboard/Stats | `/api/v1/dashboard` | Admin statistics view    |

---

## 🧱 Error Handling

All errors are handled globally using a centralized `errorMiddleware` inside `middlewares/error.middleware.ts`.

---

## 🔌 External Services

* **MongoDB** – primary database
* **Redis** – caching and session storage
* **Stripe** – secure payment gateway
* **Cloudinary** – image upload and CDN

---

## 📝 Scripts

```json
"scripts": {
  "start": "node dist/index.js",
  "dev": "ts-node-dev --respawn src/index.ts",
  "build": "tsc"
}
```

---

## ✅ TypeScript Support

Ensure your `tsconfig.json` contains:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

---

## 📬 Contributions

Feel free to open issues or submit PRs for improvements or bug fixes.

---


