---
name: conventional-commit
description: Hướng dẫn và enforce commit message theo Conventional Commits format với cú pháp `<type>/#<scope>: <subject>`. Bao gồm allowed types, rules, workflow và troubleshooting.
---

# Conventional Commit Skill

## Commit Format

```
<type>/#<scope>: <subject>
```

### Ví dụ:

- `feat/#auth: thêm chức năng đăng nhập với JWT`
- `fix/#invoice: sửa bug tính thuế sai`
- `docs/#api: cập nhật tài liệu REST API`
- `refactor/#core: tối ưu logic xử lý hóa đơn`
- `chore/#deps: update dependencies lên bản mới nhất`

## Allowed Types

- `feat` - Thêm chức năng mới
- `fix` - Sửa bug
- `docs` - Cập nhật tài liệu
- `style` - Format code (không thay đổi logic)
- `refactor` - Tối ưu code
- `test` - Thêm/sửa test
- `chore` - Việc vặt (dependencies, build config, etc.)
- `revert` - Rollback commit

## Rules

- Header tối thiểu 10 ký tự
- Header tối đa 160 ký tự
- Subject không bị ép theo case cụ thể (có thể viết hoa/thường tự do)

## Workflow

1. Stage files: `git add <files>`
2. Commit với message đúng format: `git commit -m "type/#scope: subject"`
3. Hook sẽ tự động validate commit message qua commitlint

## Tools trong dự án

- Husky cho git hooks
- Commitlint cho validation
- ESLint và Prettier chạy tự động trong pre-commit hook

## Troubleshooting

Nếu commit bị reject:

1. Kiểm tra format đúng: `<type>/#<scope>: <subject>`
2. Đảm bảo subject có ít nhất 10 ký tự
3. Kiểm tra type nằm trong danh sách allowed types
