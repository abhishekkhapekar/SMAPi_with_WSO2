# 📈 SMAPi_with_WSO2  

A modern **Stock Market API platform** built with **Spring Boot, PostgreSQL, React, and WSO2 API Manager**.  
The project integrates **WSO2 API Manager & IAM** for **API management, security, and access control**.  
It demonstrates **API rate-limiting with premium upgrade flow** for seamless monetisation.

## 🔖 Features  

- ✅ Fetch real-time **Stock Market data** via API  
- ✅ Secure endpoints with **JWT Authentication**  
- ✅ **WSO2 API Manager integration** for monitoring & throttling  
- ✅ **User access management** with WSO2 Identity & Access Manager  
- ✅ Automatic **API hit threshold check** with premium subscription message  
- ✅ Full-stack setup using **Spring Boot + PostgreSQL (backend)** and **React (frontend)**  

## 🛠️ Tech Stack  

**Backend:** Java 17, Spring Boot 3.x, PostgreSQL, JWT  
**API Management & IAM:** WSO2 API Manager, WSO2 Identity Server  
**Frontend:** React, TailwindCSS  
**DevOps:** Docker(Optional), Kubernetes (optional), Maven

## 🚀 Getting Started  

### 🔹 Prerequisites  
- Java 17+  
- PostgreSQL 14+  
- Node.js 18+ & npm/yarn  
- Docker (optional)  
- WSO2 API Manager & IAM

### ⚠️ Rate Limits:

-Free users → 100 API calls/day
-Premium users → Unlimited access

###🔐 Authentication & Access Control

-User login & registration managed via WSO2 Identity Server
-JWT issued by WSO2 for API authentication
-WSO2 API Manager enforces rate-limiting policies


### 🔹 Backend Setup  
```bash
# Clone repository
git clone https://github.com/yourusername/SMAPi_with_WSO2.git
cd SMAPi_with_WSO2/backend

# Run Spring Boot app
./mvnw spring-boot:run

cd ../frontend
npm install
npm run start


