// ========= 多语言词典（按键名组织） =========
const I18N_DICT = {
  // 顶部与标题


  banner: { zh: "部分页面已更新英文版，请点击工作流查看", en: "Some pages have been updated with English versions. Please click Workflow to view them." },

  // 导航
  "nav.articles": { zh: "杂文", en: "Articles" },
  "nav.workflow": { zh: "工作流", en: "Workflow" },
  "nav.projects": { zh: "项目经验", en: "Project Experience" },
  "nav.contact":  { zh: "联系方式", en: "Contact" },

  // 语言按钮
  "btn.zh": { zh: "中文", en: "中文" },
  "btn.en": { zh: "English", en: "English" },

  // 头像标题
  "about.blockTitle": { zh: "关于他的一切", en: "Everything About Him" },

  // 工作经验块
  "work.title": { zh: "工作经验", en: "Work Experience" },

  // 经历1：审计专员
  "work.exp1.title": {
    zh: "2022.7 - 2023.12：审计专员 - 会计师事务所",
    en: "Jul 2022 - Dec 2023: Audit Associate - Accounting Firm"
  },
  "work.exp1.t1.time": { zh: "2022年7月", en: "July 2022" },
  "work.exp1.t1.title": { zh: "H股上市公司季报审阅", en: "Quarterly Review for H-share Listed Company" },
  "work.exp1.t1.desc": {
    zh:
      "刚进事务所就被震惊了，当天下午HR就让我立刻坐火车去武汉上项目。还没缓过神来，我就开始了第一个真正的审计任务，审阅一家港股上市公司的季度报表。季报不像年报那样要做完整审计，更像是一场节奏飞快的实战演练。我们要在很短时间内看懂客户的账、判断风险、核对披露信息。最棘手的是，这家公司账套用的是中国会计准则（CAS），但报表得按国际准则（IFRS）披露。两套体系差异很大，尤其是利润表的科目分类......",
    en:
      "On my first day at the firm, HR asked me to jump on a train to Wuhan that very afternoon. Suddenly, I was on my first real audit: reviewing a Hong Kong–listed company’s quarterly report. Unlike a year-end audit, a quarterly review runs fast—we had to quickly understand the books, assess risks, and check disclosures. The toughest part: the ledger was in PRC GAAP (CAS) while disclosures had to follow IFRS, with notable differences, especially in income statement classification..."
  },

  "work.exp1.t2.time":  { zh: "2022年10月", en: "October 2022" },
  "work.exp1.t2.title": { zh: "A股上市公司预审", en: "Pre-audit for A-share Listed Company" },
  "work.exp1.t2.desc": {
    zh:
      "我参与了一个供应链企业的预审项目。预审是年审之前的准备性审计，程序相对简化，但目标是对被审计单位的财务状况和内部控制体系进行全面观察和初步评估，为后续正式年审奠定基础。在该项目中，我主要负责资产类科目的底稿编制、对公司内部控制的初步了解，并识别潜在问题与改进空间......",
    en:
      "I worked on a pre-audit for a supply-chain company. A pre-audit precedes the annual audit with streamlined procedures, aiming to gain a broad understanding of financials and internal controls to set up the full audit. I prepared workpapers for asset accounts, performed preliminary internal control walkthroughs, and identified potential issues and improvements..."
  },

  "work.exp1.t3.time":  { zh: "2022年12月", en: "December 2022" },
  "work.exp1.t3.title": { zh: "A股上市公司年审", en: "Year-end Audit for A-share Listed Company" },
  "work.exp1.t3.desc": {
    zh:
      "同年，我参与了另一家A股上市公司的年度审计项目。这家公司位于无锡，主营化工原料生产，在多个国家设有子公司。我的审计任务从其中一家韩国子公司开始。项目启动时，正值国内疫情放开后感染高峰，上一批外勤团队几乎全员感染被迫休息。我们接到紧急通知后，仅用一晚时间便组成了一个四人小组，启程前往韩国执行审计......",
    en:
      "Later that year, I joined the annual audit of another A-share listed chemical company headquartered in Wuxi with subsidiaries worldwide. I started with its Korean subsidiary. When the project kicked off, China was at a COVID infection peak and the prior field team was down. We formed a four-person team overnight and flew to Korea to proceed with the audit..."
  },

  "work.exp1.t4.time":  { zh: "2023年7月", en: "July 2023" },
  "work.exp1.t4.title": { zh: "IPO审计项目", en: "IPO Audit Engagement" },
  "work.exp1.t4.desc": {
    zh:
      "我最后一次参与的审计项目，是对一家位于天津的新能源企业的审计。这家公司在多个国家设有分支机构，尤其在德国拥有一间关键性的子公司，负责集团的海外贸易中转业务。该企业正计划在境内IPO，因此我们的工作重点是对其财务信息进行全方位的审阅和规范，以确保未来的上市审查能够顺利通过......",
    en:
      "My final audit project was for a Tianjin-based new energy company with branches worldwide, including a key German subsidiary handling overseas trading. The company planned a domestic IPO, so we focused on a comprehensive review and normalization of financial information to prepare for listing scrutiny..."
  },

  // 经历2：全盘账会计
  "work.exp2.title": {
    zh: "2024.3 - 2024.11：全盘账会计 - 跨境电商企业",
    en: "Mar 2024 - Nov 2024: Full-charge Accountant - Cross-border E-commerce"
  },
  "work.exp2.t1.time":  { zh: "2024年3月", en: "March 2024" },
  "work.exp2.t1.title": { zh: "从乙方到甲方", en: "From External Auditor to In-house Finance" },
  "work.exp2.t1.desc": {
    zh:
      "从事务所到企业，是职业身份的重大转变。在事务所做审计时，我始终是乙方，以外部视角评估他人。而第一次进入甲方企业，我终于成为了经营的一部分，需要在体系内解决问题，而不是仅仅指出问题......",
    en:
      "Moving from a firm to an in-house role marked a major shift. As an auditor, I was always the external party evaluating others. As an in-house accountant, I became part of operations—solving issues within the system instead of merely pointing them out..."
  },

  // 经历3：海外财务（金融科技）
  "work.exp3.title": {
    zh: "2024.12 - 2025.3：海外财务 - 金融科技公司",
    en: "Dec 2024 - Mar 2025: Overseas Finance - FinTech"
  },
  "work.exp3.t1.time":  { zh: "2024年12月", en: "December 2024" },
  "work.exp3.t1.title": { zh: "在金融领域拓展", en: "Expanding into Financial Services" },
  "work.exp3.t1.desc": {
    zh:
      "我是会计与金融专业出身，对金融服务的基本逻辑比较熟悉。当我第一次了解公司业务时，意识到这是一个在菲律宾运营的类金融服务平台，主要包含 BNPL（Buy Now Pay Later）与 QL（Quick Loan） 模式......",
    en:
      "With an accounting and finance background, I’m familiar with financial service logic. Upon learning about the business, I realized the platform operates in the Philippines, focusing on BNPL and Quick Loan models..."
  },

  // 经历4：成本分析员
  "work.exp4.title": {
    zh: "2025.6 - 2025.9：成本分析员 - 机械设备制造企业",
    en: "Jun 2025 - Sep 2025: Cost Analyst - Machinery Manufacturer"
  },
  "work.exp4.t1.time":  { zh: "2025年6月", en: "June 2025" },
  "work.exp4.t1.title": { zh: "专注数据分析", en: "Focus on Data Analytics" },
  "work.exp4.t1.desc": {
    zh:
      "刚入职时，我把重点放在熟悉企业的成本核算逻辑和数据流向上。凭借过往审计项目的经验，我很快厘清了公司成本的主要构成：人工、材料、外协、物流与间接费用......",
    en:
      "At the start, I focused on the cost accounting logic and data flows. Drawing on my audit experience, I quickly mapped the main cost components: labor, materials, subcontracting, logistics, and overhead..."
  },

  // 技能
  "skills.title": { zh: "技能", en: "Skills" },
  "skills.item1": {
    zh: "财务：中国会计准则(CAS), 国际会计准则(IFRS), ACCA(10/13), 初级职称",
    en: "Finance: PRC GAAP (CAS), IFRS, ACCA (10/13), Junior Accountant Certification"
  },
  "skills.item2": {
    zh: "软件：Excel, 用友, 金蝶, 各类ERP(如 Odoo)",
    en: "Software: Excel, UFIDA, Kingdee, various ERPs (e.g., Odoo)"
  },
  "skills.item3": {
    zh: "编程：数据库, Python(数据可视化), VBA, JS",
    en: "Programming: Databases, Python (data visualization), VBA, JS"
  },

  // 页脚

};

// ========= 语言状态 =========
const DEFAULT_LANG = "zh";
function getLang() {
  return localStorage.getItem("lang") || DEFAULT_LANG;
}
function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
  renderI18n();
}

// ========= 渲染逻辑 =========
function renderI18n() {
  const lang = getLang();

  // 常规 data-i18n：使用 textContent 渲染
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const pair = I18N_DICT[key];
    if (pair && pair[lang] != null) {
      el.textContent = pair[lang];
    }
  });

  // 如果你需要在翻译里放 <br> 或链接，可把元素改用 data-i18n-html
  // 并在这里用 innerHTML 渲染（默认注释掉，按需启用）：
  // document.querySelectorAll("[data-i18n-html]").forEach((el) => {
  //   const key = el.getAttribute("data-i18n-html");
  //   const pair = I18N_DICT[key];
  //   if (pair && pair[lang] != null) {
  //     el.innerHTML = pair[lang];
  //   }
  // });

  // 同步 <title>
  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) {
    const key = titleEl.getAttribute("data-i18n");
    const pair = I18N_DICT[key];
    if (pair && pair[lang] != null) {
      titleEl.textContent = pair[lang];
    }
  }
}

// ========= 事件绑定 =========
document.addEventListener("DOMContentLoaded", () => {
  // 初始化语言
  setLang(getLang());

  // 绑定按钮
  const btnZh = document.getElementById("btn-zh");
  const btnEn = document.getElementById("btn-en");
  if (btnZh) btnZh.addEventListener("click", () => setLang("zh"));
  if (btnEn) btnEn.addEventListener("click", () => setLang("en"));
});
