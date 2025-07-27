# SNXWXH UI

React + TypeScript + Tailwind CSS 기반 디자인 시스템

## 프로젝트 정보

| 항목            | 내용                                                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **버전**        | 1.0.0                                                                                                                                    |
| **개발 기간**   | 2025년 7월 14일 ~                                                                                                                        |
| **기술 스택**   | React 19, TypeScript, Vite, Storybook, Tailwind CSS 4                                                                                    |
| **디자인 참고** | [Obra shadcn UI](https://www.figma.com/design/ijo5him7gv2D6LFv4EpJYT/Obra-shadcn-ui--Community-?node-id=280-103567&t=nJxQt3cmYZV1ogxp-0) |

## Quick Start

```bash
npm install
npm run dev          # 개발 서버
npm run storybook    # Storybook (http://localhost:6006)
npm run build        # 프로덕션 빌드
```

## 컴포넌트 (v1.0.0)

### Button

| Prop        | Type        | Default     | Options                                                         |
| ----------- | ----------- | ----------- | --------------------------------------------------------------- |
| `variant`   | `string`    | `'primary'` | `'primary'` `'secondary'` `'outline'` `'ghost'` `'destructive'` |
| `size`      | `string`    | `'regular'` | `'mini'` `'small'` `'regular'` `'large'`                        |
| `isDisable` | `boolean`   | `false`     | -                                                               |
| `children`  | `ReactNode` | -           | -                                                               |

```tsx
<Button variant='primary' size='regular'>
  Click me
</Button>
```

### Input

| Prop          | Type      | Default     | Options                                  |
| ------------- | --------- | ----------- | ---------------------------------------- |
| `size`        | `string`  | `'regular'` | `'mini'` `'small'` `'regular'` `'large'` |
| `isDisabled`  | `boolean` | `false`     | -                                        |
| `isError`     | `boolean` | `false`     | -                                        |
| `placeholder` | `string`  | `''`        | -                                        |

```tsx
<Input size='regular' placeholder='Enter text...' />
```

### Radio

| Prop        | Type      | Default      | Options |
| ----------- | --------- | ------------ | ------- |
| `value`     | `string`  | **required** | -       |
| `label`     | `string`  | `''`         | -       |
| `checked`   | `boolean` | `false`      | -       |
| `isDisable` | `boolean` | `false`      | -       |
| `isError`   | `boolean` | `false`      | -       |

```tsx
<Radio value='option1' label='Option 1' />
```

## 🗂️ 프로젝트 구조

```
src/
├── components/
│   ├── button/Button.tsx
│   ├── input/Input.tsx
│   └── radio/Radio.tsx
├── stories/            # Storybook 스토리
└── lib/                # 유틸리티
```

## Git Workflow

| 브랜치      | 용도        |
| ----------- | ----------- |
| `main`      | 배포용      |
| `develop`   | 개발 통합   |
| `feature/*` | 기능 개발   |
| `release/*` | 릴리즈 준비 |

**브랜치명**: `feature/#{이슈번호}
