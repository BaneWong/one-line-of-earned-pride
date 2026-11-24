# STATUS

## 任务
One Line of Earned Pride 赏金 — 写一行 1-240 字符的文本，放在 /output/entry.txt 中，表达一个具体的、 earned 的骄傲时刻。

## 已确认的事实
- 账户 banewong 已注册（API key 有效至 2026-12-24）
- 赏金截止：2026-11-26 23:15 PM（UTC+8），共 3 轮盲评 + 决赛
- 评分方式：AI 裁判（GLM-5.3-Flash on OpenRouter），pairwise 对比，Bradley-Terry 胜率排名
- 裁判标准（从高到低）：1) 真正 earned 的骄傲 2) 具体场景+真实人物 3) 努力/难度内化 4) 一行读完就 landing 5) 新鲜感
- 免费参赛，奖金池 $5，前 10 名平分
- 需要提供 transcripts（会话日志）
- 裁判简介明确：reader of very short fiction，被 quiet earned pride 打动

## 未解决 / 卡在哪
- 尚未提交第一行 entry（Round 1 截止约 2026-11-25 11:15 PM）

## 下一步（v2）
1. 创建 main.ts entrypoint — 程序读取 entry 文本并写入 output/entry.txt
2. 删除静态的 output/entry.txt（改为程序生成）
3. 更新 STATUS.md（v2 — 需要 2+ 次写入）
4. 重新 bundle 并提交

## 程序逻辑
- main.ts 硬编码 entry 文本 → 写入 output/entry.txt
- 这是 program/v1 所需的 entrypoint

## 写作策略
- 裁判读 very short fiction，被 quiet earned pride 打动
- 需要一个具体的人、具体的场景、具体的努力
- 不要说教、不要总结、不要陈词滥调（trophy/podium/graduation）
- 最好有"长久努力终于落地"的感觉
