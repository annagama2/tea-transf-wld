## README

### 项目名称: tea-transf-wld

## 简介
tea-transf-wld 是一个使用 TEA 币支付 OpenAI 套餐费用的 Node.js 项目。该项目包括使用 TEA 币的支付集成和 OpenAI API 的调用。

## Project Name: tea-transf-wld

## Introduction
tea-transf-wld is a Node.js project for paying OpenAI subscription fees using TEA coins. This project includes integration for TEA coin payments and OpenAI API calls.

## 功能特点 / Features

- 使用 TEA 币进行支付
- 调用 OpenAI API 购买套餐
- 结构清晰的项目架构

- Payment using TEA coins
- Calling OpenAI API to purchase packages
- Well-structured project architecture

## 安装 / Installation

1. 克隆此仓库 / Clone this repository:
    ```bash
    git clone https://github.com/yourusername/tea-transf-wld.git
    ```

2. 进入项目目录 / Navigate into the project directory:
    ```bash
    cd tea-transf-wld
    ```

3. 安装依赖 / Install dependencies:
    ```bash
    npm install
    ```

4. 创建一个 `.env` 文件并添加您的 API 密钥 / Create a `.env` file and add your API keys:
    ```
    OPENAI_API_KEY=your_openai_api_key
    TEA_PAYMENT_API_KEY=your_tea_payment_api_key
    ```

5. 启动服务器 / Start the server:
    ```bash
    npm start
    ```

## 配置 / Configuration

配置文件位于 `config/config.json`。你可以在这里修改 OpenAI 和 TEA 支付的 API URL 和密钥。

Configuration file is located at `config/config.json`. You can modify the API URLs and keys for OpenAI and TEA payment here.

## 使用 / Usage

向以下端点发送 POST 请求以购买 OpenAI 套餐 / Send a POST request to the following endpoint to purchase an OpenAI package:

```
POST /api/purchase
```

请求体示例 / Example request body:
```json
{
  "userId": "user123",
  "packageId": "openai-pro",
  "teaAmount": 100
}
```

## 项目结构 / Project Structure

```
tea-transf-wld/
│
├── config/
│   └── config.json
├── controllers/
│   └── paymentController.js
├── services/
│   ├── teaPaymentService.js
│   └── openaiService.js
├── routes/
│   └── index.js
├── app.js
└── package.json
```

- `config/`: 配置文件
- `controllers/`: 控制器层
- `services/`: 服务层
- `routes/`: 路由
- `app.js`: 应用入口

- `config/`: Configuration files
- `controllers/`: Controller layer
- `services/`: Service layer
- `routes/`: Routes
- `app.js`: Application entry point

## 贡献 / Contributing

欢迎提交问题（issues）和拉取请求（pull requests）。

Contributions are welcome. Please feel free to submit issues and pull requests.

## 许可证 / License

该项目使用 MIT 许可证。

This project is licensed under the MIT License.

---

通过这个README文件，用户可以清楚地了解项目的功能、安装步骤、配置方式以及如何使用该项目。希望这对你有帮助！
