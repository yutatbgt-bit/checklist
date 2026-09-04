/**
 * 提出物チェックリスト — 設定ファイル
 *
 * このファイルだけ編集することで、項目の追加・変更・削除が可能です。
 * index.html は変更不要です。
 *
 * ─────────────────────────────────────────
 * 各項目フィールドの説明:
 *   id       : 内部識別子（英数字・アンダースコアのみ / 他の項目と重複禁止）
 *   label    : 画面に表示される提出物名
 *   deadline : 期限テキスト（画面に表示されるだけ / 自由記述）
 *   category : グループ分けカテゴリ（後述 CHECKLIST_CONFIG.categories に定義した id と一致させる）
 *   note     : 備考の初期値（空文字で「なし」）
 * ─────────────────────────────────────────
 */

const CHECKLIST_CONFIG = {

  /** アプリのタイトル（ヘッダーに表示） */
  appTitle: "提出物チェックリスト",

  /** フッターに表示する補足テキスト（不要なら空文字 "" にする） */
  footerText: "チェック状態はこのPCのブラウザに保存されます。全クリア後は再入力してください。",

  /**
   * カテゴリ定義
   *   id    : items の category フィールドと一致させる
   *   label : 見出しとして表示される名称
   *   icon  : 見出し横の絵文字アイコン（省略可）
   */
  categories: [
    { id: "monthly", label: "月次提出" },
    { id: "weekly", label: "週次提出" },
  ],

  /**
   * チェックリスト項目
   * ※ id は重複しないようにしてください
   */
  items: [
    {
      id: "monthly_report",
      label: "月次報告書",
      deadline: "7日頃（案内）〆",
      category: "monthly",
      note: ""
    },
    {
      id: "interim_report",
      label: "中間報告書",
      deadline: "21日頃（案内）〆",
      category: "monthly",
      note: ""
    },
    {
      id: "abnormal_report",
      label: "異常値報告書（中間/期末）",
      deadline: "19日 / 4日〆",
      category: "monthly",
      note: ""
    },
    {
      id: "daily_budget",
      label: "日割り予算",
      deadline: "毎月20日〆",
      category: "monthly",
      note: ""
    },
    {
      id: "5s_improvement",
      label: "5S改善項目一覧",
      deadline: "月末〆",
      category: "monthly",
      note: ""
    },
    {
      id: "end_plan",
      label: "エンド計画表",
      deadline: "月末〆",
      category: "monthly",
      note: ""
    },
    {
      id: "expiry_check",
      label: "賞味期限チェック表",
      deadline: "月末〆",
      category: "monthly",
      note: ""
    },
    {
      id: "weekly_performance",
      label: "週間業績報告書",
      deadline: "毎週日曜日（案内）〆",
      category: "weekly",
      note: ""
    },
    {
      id: "flyer_image",
      label: "チラシ掲載商品売場画像",
      deadline: "毎週土曜日",
      category: "weekly",
      note: ""
    },
  ]
};
