# 電卓アプリケーション

シンプルで使いやすいReactベースの電卓アプリケーションです。モダンなUIと直感的な操作性を提供します。

## 主な機能

- 基本的な四則演算（加算、減算、乗算、除算）
- クリア機能
- レスポンシブデザイン
- モダンなUIデザイン

## インストール方法

1. リポジトリをクローン:
```bash
git clone https://github.com/yourusername/dentaku.git
cd dentaku
```

2. 依存関係をインストール:
```bash
npm install
```

3. アプリケーションを起動:
```bash
npm start
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションにアクセスできます。

## 使い方

1. 数字ボタンをクリックして数値を入力
2. 演算子ボタン（+, -, ×, ÷）をクリックして演算を選択
3. = ボタンをクリックして計算結果を表示
4. ACボタンで表示をクリア

## 技術スタック

- [React.js](https://reactjs.org/) - UIライブラリ
- [Tailwind CSS](https://tailwindcss.com/) - スタイリング
- [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - テストフレームワーク
- [Custom Hooks](https://reactjs.org/docs/hooks-custom.html) - 状態管理

## 開発

### テストの実行

```bash
npm test
```

### ビルド

```bash
npm run build
```

### コードの構成

```
src/
├── components/          # Reactコンポーネント
│   ├── Calculator.js    # メインの電卓コンポーネント
│   ├── Display.js      # 数値表示コンポーネント
│   └── CalculatorButton.js  # ボタンコンポーネント
├── hooks/              # カスタムフック
│   └── useCalculator.js    # 電卓のロジック
├── constants/          # 定数定義
└── __tests__/         # テストファイル
```
