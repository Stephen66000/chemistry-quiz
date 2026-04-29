// ============================================================
// 卓阳的化学复习魔幻之旅 · 题库
// 第一批：必背类 90 题 (30 KP × 3 题) + 必懂/易混/TOP20 样题保留
// ============================================================

const KNOWLEDGE_POINTS = [
  // ===================== 必背类 30 KP =====================
  // —— 子模块 A · 元素符号（4 KP）——
  { id: 'M001', category: '必背', unit: 0, title: '前 20 号元素符号', desc: 'H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca' },
  { id: 'M002', category: '必背', unit: 0, title: '金属活动性顺序', desc: 'K Ca Na Mg Al Zn Fe Sn Pb (H) Cu Hg Ag Pt Au' },
  { id: 'M003', category: '必背', unit: 3, title: '常见原子团', desc: 'OH⁻ NO₃⁻ SO₄²⁻ CO₃²⁻ NH₄⁺ 等' },
  { id: 'M004', category: '必背', unit: 0, title: '其他常考元素符号', desc: 'Mn Ba Ti Br I' },

  // —— 子模块 B · 化合价（3 KP）——
  { id: 'M005', category: '必背', unit: 4, title: '常见元素化合价', desc: '化合价口诀' },
  { id: 'M006', category: '必背', unit: 4, title: '由化学式求化合价', desc: '已知化学式，反推某元素化合价' },
  { id: 'M007', category: '必背', unit: 4, title: '由化合价写化学式', desc: '已知化合价，写出化学式' },

  // —— 子模块 C · 化学方程式（15 KP）——
  { id: 'M008', category: '必背', unit: 2, title: '单质在氧气中燃烧', desc: 'C/S/P/Mg/Fe/Al' },
  { id: 'M009', category: '必背', unit: 2, title: '气体可燃物燃烧', desc: 'H₂/CO/CH₄/酒精' },
  { id: 'M010', category: '必背', unit: 2, title: '加热分解类', desc: 'KMnO₄/KClO₃/HgO/CaCO₃' },
  { id: 'M011', category: '必背', unit: 4, title: 'H₂O₂ 分解 / 水电解', desc: '过氧化氢/水的分解' },
  { id: 'M012', category: '必背', unit: 8, title: '金属 + 稀盐酸', desc: '置换反应放 H₂' },
  { id: 'M013', category: '必背', unit: 8, title: '金属 + 稀硫酸', desc: '置换反应放 H₂' },
  { id: 'M014', category: '必背', unit: 8, title: '金属 + 盐溶液', desc: '前置换后' },
  { id: 'M015', category: '必背', unit: 6, title: 'H₂/C 还原氧化物', desc: '冶炼金属的原理' },
  { id: 'M016', category: '必背', unit: 6, title: 'CO 还原氧化物', desc: '高炉炼铁的原理' },
  { id: 'M017', category: '必背', unit: 10, title: '酸 + 金属氧化物', desc: '复分解反应' },
  { id: 'M018', category: '必背', unit: 10, title: '酸 + 碱（中和）', desc: '复分解反应' },
  { id: 'M019', category: '必背', unit: 10, title: '酸 + 盐', desc: '复分解反应' },
  { id: 'M020', category: '必背', unit: 10, title: '碱 + 非金属氧化物', desc: 'NaOH 吸 CO₂ 等' },
  { id: 'M021', category: '必背', unit: 11, title: '碱 + 盐', desc: '复分解反应' },
  { id: 'M022', category: '必背', unit: 11, title: '盐 + 盐', desc: '复分解反应' },

  // —— 子模块 D · 化学式（4 KP）——
  { id: 'M023', category: '必背', unit: 10, title: '常见酸的化学式', desc: 'HCl/H₂SO₄/HNO₃/H₂CO₃/H₃PO₄' },
  { id: 'M024', category: '必背', unit: 10, title: '常见碱的化学式', desc: 'NaOH/KOH/Ca(OH)₂/NH₃·H₂O 等' },
  { id: 'M025', category: '必背', unit: 11, title: '常见盐的化学式', desc: 'NaCl/Na₂CO₃/CaCO₃/CuSO₄ 等' },
  { id: 'M026', category: '必背', unit: 4, title: '常见氧化物的化学式', desc: 'CO₂/SO₂/Fe₂O₃/Fe₃O₄/CuO 等' },

  // —— 子模块 E · 之最（2 KP）——
  { id: 'M027', category: '必背', unit: 3, title: '元素之最', desc: '地壳/人体/空气/海洋含量最多' },
  { id: 'M028', category: '必背', unit: 8, title: '金属之最', desc: '颜色/导电/硬度/熔点等' },

  // —— 子模块 F · 实验现象记忆（2 KP）——
  { id: 'M029', category: '必背', unit: 2, title: '燃烧现象记忆', desc: '火焰颜色/产物/烟雾' },
  { id: 'M030', category: '必背', unit: 11, title: '沉淀颜色与气体特征', desc: 'Cu(OH)₂蓝/Fe(OH)₃红褐/AgCl白' },

  // ===================== 必懂类（30 KP）=====================
  { id: 'U001', category: '必懂', unit: 2, title: '催化剂（一变两不变）', desc: '改变反应速率，自身质量和化学性质不变' },
  { id: 'U002', category: '必懂', unit: 5, title: '质量守恒定律', desc: '反应前后元素/原子种类、数目、质量都不变' },
  { id: 'U003', category: '必懂', unit: 11, title: '复分解反应发生条件', desc: '生成物中需有气体↑/沉淀↓/水' },
  { id: 'U004', category: '必懂', unit: 8, title: '金属活动性顺序的应用', desc: '判断置换反应能否发生' },
  { id: 'U005', category: '必懂', unit: 9, title: '溶解度曲线读图', desc: '点的意义/比较/趋势' },
  { id: 'U006', category: '必懂', unit: 10, title: '浓硫酸三性 + 稀释方法', desc: '脱水/吸水/腐蚀；稀释酸入水' },
  { id: 'U007', category: '必懂', unit: 10, title: 'pH 与酸碱性', desc: 'pH<7 酸性、=7 中性、>7 碱性' },
  { id: 'U008', category: '必懂', unit: 10, title: '酸的 5 条通性', desc: 'H⁺ 决定的共性' },
  { id: 'U009', category: '必懂', unit: 10, title: '碱的 4 条通性', desc: 'OH⁻ 决定的共性' },
  { id: 'U010', category: '必懂', unit: 10, title: '中和反应及实质', desc: 'H⁺ + OH⁻ = H₂O' },
  { id: 'U011', category: '必懂', unit: 7, title: '燃烧三条件 / 灭火三原理', desc: '可燃物/氧气/着火点' },
  { id: 'U012', category: '必懂', unit: 8, title: '铁生锈条件与防锈', desc: '与氧气和水共同作用' },
  { id: 'U013', category: '必懂', unit: 6, title: 'CO₂ 实验室制取', desc: '原理/装置/检验/验满' },
  { id: 'U014', category: '必懂', unit: 2, title: 'O₂ 实验室制取', desc: '组查装定点收移熄' },
  { id: 'U015', category: '必懂', unit: 4, title: '过滤一贴二低三靠', desc: '操作要点与作用' },
  { id: 'U016', category: '必懂', unit: 3, title: '分子原子离子', desc: '微观粒子构成物质' },
  { id: 'U017', category: '必懂', unit: 3, title: '元素的概念', desc: '质子数相同的一类原子总称' },
  { id: 'U018', category: '必懂', unit: 3, title: '原子结构数量关系', desc: '核电荷数=质子数=电子数=原子序数' },
  { id: 'U019', category: '必懂', unit: 3, title: '最外层电子数决定化学性质', desc: '金属<4 易失，非金属≥4 易得' },
  { id: 'U020', category: '必懂', unit: 9, title: '溶质质量分数公式', desc: '溶质/溶液 × 100%' },
  { id: 'U021', category: '必懂', unit: 9, title: '配制溶液误差分析', desc: '偏大/偏小判断' },
  { id: 'U022', category: '必懂', unit: 11, title: '常用离子检验', desc: 'Cl⁻/SO₄²⁻/CO₃²⁻/NH₄⁺' },
  { id: 'U023', category: '必懂', unit: 11, title: '化肥简易鉴别', desc: '氮磷钾的鉴别思路' },
  { id: 'U024', category: '必懂', unit: 7, title: '化石能源', desc: '煤/石油/天然气，不可再生' },
  { id: 'U025', category: '必懂', unit: 4, title: '单质/化合物/氧化物', desc: '物质分类' },
  { id: 'U026', category: '必懂', unit: 5, title: '四种基本反应类型对比', desc: '化合/分解/置换/复分解' },
  { id: 'U027', category: '必懂', unit: 9, title: '溶液的特征', desc: '均一、稳定、混合物' },
  { id: 'U028', category: '必懂', unit: 9, title: '饱和与浓稀的关系', desc: '饱和不一定浓' },
  { id: 'U029', category: '必懂', unit: 8, title: '工业炼铁原理', desc: '高炉炼铁' },
  { id: 'U030', category: '必懂', unit: 11, title: '除杂的基本思路', desc: '不引入新杂质' },

  // ===================== 易混类（2 KP 样题保留）=====================
  { id: 'X001', category: '易混', unit: 2, title: '化合反应 vs 氧化反应', desc: '两者无必然联系' },
  { id: 'X002', category: '易混', unit: 2, title: '火焰颜色辨析', desc: '硫·磷·镁·氢气·CO 等' },

  // ===================== TOP20（2 KP 样题保留）=====================
  { id: 'T001', category: 'TOP20', unit: 11, title: '复分解反应能否发生', desc: '生成物中需有气体↑、沉淀↓或水' },
  { id: 'T002', category: 'TOP20', unit: 9, title: '配制溶液误差分析', desc: '偏大/偏小操作判断' }
];

const QUESTIONS = [

  // ============================================================
  // M001 · 前 20 号元素符号
  // ============================================================
  {
    id: 'q001', kpId: 'M001', type: 'choice', difficulty: 1,
    stem: '下列元素符号书写正确的是？',
    options: ['A. CL（氯）', 'B. nA（钠）', 'C. Mg（镁）', 'D. CA（钙）'],
    answer: 'C',
    explanation: '元素符号书写规则：第一个字母**大写**，第二个字母（如有）**小写**。\n• A 错：氯应为 Cl（小写 l）\n• B 错：钠应为 Na（首字母大写）\n• C 正确：Mg ✓\n• D 错：钙应为 Ca\n\n💡 这是最容易丢分的细节，写化学式前先把元素符号写对。',
    relatedKps: ['M001']
  },
  {
    id: 'q002', kpId: 'M001', type: 'fill', difficulty: 2,
    stem: '请按周期顺序写出第二周期 8 个元素的元素符号（用空格隔开）：',
    answer: 'Li Be B C N O F Ne',
    altAnswers: ['Li,Be,B,C,N,O,F,Ne', 'Li、Be、B、C、N、O、F、Ne'],
    explanation: '第二周期 8 个元素：锂、铍、硼、碳、氮、氧、氟、氖\n对应符号：Li Be B C N O F Ne\n\n💡 记忆口诀："锂铍硼碳氮，氧氟氖收尾"。\n\n第一周期只有 H He；第二周期 8 个；第三周期 8 个（Na Mg Al Si P S Cl Ar）；第四周期前 2 个是 K Ca。',
    relatedKps: ['M001']
  },
  {
    id: 'q003', kpId: 'M001', type: 'choice', difficulty: 3,
    stem: '下列元素符号与名称对应**错误**的是？',
    options: ['A. Si — 硅', 'B. P — 磷', 'C. S — 锡', 'D. Ar — 氩'],
    answer: 'C',
    explanation: '正确对应：\n• Si — 硅 ✓\n• P — 磷 ✓\n• S — **硫**（不是锡，锡是 Sn）\n• Ar — 氩 ✓\n\n答案 C。\n\n💡 易混点：S（硫）和 Sn（锡）；Si（硅）和 Se（硒）；P（磷）和 Pb（铅）。',
    relatedKps: ['M001', 'M002']
  },

  // ============================================================
  // M002 · 金属活动性顺序
  // ============================================================
  {
    id: 'q004', kpId: 'M002', type: 'choice', difficulty: 1,
    stem: '下列金属中，活动性最强的是？',
    options: ['A. 铜 (Cu)', 'B. 铁 (Fe)', 'C. 镁 (Mg)', 'D. 银 (Ag)'],
    answer: 'C',
    explanation: '金属活动性顺序：K Ca Na Mg Al Zn Fe Sn Pb (H) Cu Hg Ag Pt Au。\n位置越靠前活动性越强。\n本题：Mg > Fe > Cu > Ag，所以 Mg 最强。',
    relatedKps: ['M002']
  },
  {
    id: 'q005', kpId: 'M002', type: 'fill', difficulty: 2,
    stem: '请按从强到弱的顺序，写出金属活动性顺序前 6 位金属的元素符号（用空格隔开）：',
    answer: 'K Ca Na Mg Al Zn',
    altAnswers: ['K,Ca,Na,Mg,Al,Zn', 'K、Ca、Na、Mg、Al、Zn'],
    explanation: '前 6 位：钾、钙、钠、镁、铝、锌 → K Ca Na Mg Al Zn\n\n口诀："钾钙钠镁铝，锌铁锡铅氢，铜汞银铂金"——前 6 位就是第一句加 1 个"锌"。',
    relatedKps: ['M002']
  },
  {
    id: 'q006', kpId: 'M002', type: 'choice', difficulty: 3,
    stem: '下列金属中，能与稀盐酸反应放出氢气的是？',
    options: ['A. 银 (Ag)', 'B. 铜 (Cu)', 'C. 铁 (Fe)', 'D. 金 (Au)'],
    answer: 'C',
    explanation: '判断关键：金属位置在 (H) 之前才能置换出酸中的氢。\n• Fe 在 H 之前 ✓\n• Cu、Ag、Au 都在 H 之后 ✗\n\n方程式：Fe + 2HCl = FeCl₂ + H₂↑\n注意铁在置换反应中显 +2 价。',
    relatedKps: ['M002', 'M012']
  },

  // ============================================================
  // M003 · 常见原子团
  // ============================================================
  {
    id: 'q007', kpId: 'M003', type: 'choice', difficulty: 1,
    stem: '下列原子团中，化合价为 −2 的是？',
    options: ['A. OH⁻', 'B. NO₃⁻', 'C. SO₄²⁻', 'D. NH₄⁺'],
    answer: 'C',
    explanation: '常见原子团化合价：\n• OH⁻ — 氢氧根 −1\n• NO₃⁻ — 硝酸根 −1\n• SO₄²⁻ — 硫酸根 **−2** ✓\n• NH₄⁺ — 铵根 **+1**（注意：是阳离子，唯一正价的常见原子团）\n• CO₃²⁻ — 碳酸根 −2\n• PO₄³⁻ — 磷酸根 −3',
    relatedKps: ['M003', 'M005']
  },
  {
    id: 'q008', kpId: 'M003', type: 'fill', difficulty: 2,
    stem: '写出下列原子团的化学符号：\n碳酸根 ____，磷酸根 ____，铵根 ____',
    answer: 'CO3 2-;PO4 3-;NH4 +',
    altAnswers: ['CO32-;PO43-;NH4+', 'CO₃²⁻;PO₄³⁻;NH₄⁺', 'CO3(2-);PO4(3-);NH4(+)'],
    explanation: '正确写法：\n• 碳酸根：CO₃²⁻（C 后面是下标 3，电荷 −2 在右上角）\n• 磷酸根：PO₄³⁻（P 后面下标 4，电荷 −3）\n• 铵根：NH₄⁺（N 后面下标 4，电荷 +1，唯一带正电的常见原子团）\n\n💡 记忆方法：碳酸根 = 碳酸 H₂CO₃ 去掉 2H；磷酸根 = 磷酸 H₃PO₄ 去掉 3H。',
    relatedKps: ['M003']
  },
  {
    id: 'q009', kpId: 'M003', type: 'choice', difficulty: 3,
    stem: '下列化合物中含有 OH⁻ 原子团的是？',
    options: ['A. NaCl', 'B. Ca(OH)₂', 'C. Na₂CO₃', 'D. NH₄NO₃'],
    answer: 'B',
    explanation: '含 OH⁻（氢氧根）的物质 = 碱。\n• A NaCl 是盐，不含 OH⁻\n• B Ca(OH)₂ 氢氧化钙 ✓\n• C Na₂CO₃ 碳酸钠（含 CO₃²⁻ 不是 OH⁻）\n• D NH₄NO₃ 硝酸铵（含 NH₄⁺ 和 NO₃⁻）\n\n💡 看到 (OH)ₙ 的物质，就是碱。',
    relatedKps: ['M003', 'M024']
  },

  // ============================================================
  // M004 · 其他常考元素
  // ============================================================
  {
    id: 'q010', kpId: 'M004', type: 'choice', difficulty: 1,
    stem: '元素符号 Mn 表示的元素是？',
    options: ['A. 镁', 'B. 锰', 'C. 汞', 'D. 钠'],
    answer: 'B',
    explanation: 'Mn = 锰（拉丁文 Manganum）\n常见混淆：\n• Mg — 镁\n• Mn — 锰 ✓\n• Hg — 汞\n• Na — 钠\n\n💡 锰元素常考的物质：MnO₂（二氧化锰，催化剂）、KMnO₄（高锰酸钾，紫黑色固体）。',
    relatedKps: ['M004']
  },
  {
    id: 'q011', kpId: 'M004', type: 'fill', difficulty: 2,
    stem: '写出下列元素的符号：钡 ____，钛 ____，溴 ____，碘 ____',
    answer: 'Ba;Ti;Br;I',
    altAnswers: ['Ba,Ti,Br,I', 'Ba、Ti、Br、I'],
    explanation: '常考非前 20 号元素：\n• 钡 Ba（注意：B 大写 a 小写，不要写成 BA）\n• 钛 Ti\n• 溴 Br\n• 碘 I（只有一个字母，必须大写）\n\n💡 这些元素在中考化学式题、酸碱盐题中经常出现，比如 BaCl₂（氯化钡，检验 SO₄²⁻）、AgBr（溴化银）。',
    relatedKps: ['M004']
  },
  {
    id: 'q012', kpId: 'M004', type: 'choice', difficulty: 3,
    stem: '下列物质中含有钡（Ba）元素的是？',
    options: ['A. 高锰酸钾', 'B. 硫酸钡', 'C. 氯化钠', 'D. 碳酸钙'],
    answer: 'B',
    explanation: '逐项分析化学式：\n• A KMnO₄ — 含 K、Mn、O\n• B BaSO₄ — 含 **Ba** ✓、S、O\n• C NaCl — 含 Na、Cl\n• D CaCO₃ — 含 Ca、C、O\n\n💡 BaSO₄ 是检验 SO₄²⁻ 的白色沉淀，不溶于稀硝酸——中考高频考点。',
    relatedKps: ['M004', 'M025']
  },

  // ============================================================
  // M005 · 常见元素化合价
  // ============================================================
  {
    id: 'q013', kpId: 'M005', type: 'choice', difficulty: 1,
    stem: '下列元素中常见化合价为 +2 价的是？',
    options: ['A. 氢', 'B. 钠', 'C. 镁', 'D. 铝'],
    answer: 'C',
    explanation: '化合价口诀第一句："一价钾钠氢氯银，二价钙镁钡氧锌"。\n• A 氢 H — +1\n• B 钠 Na — +1\n• C 镁 Mg — **+2** ✓\n• D 铝 Al — +3\n\n💡 化合价口诀全文：\n一价钾钠氢氯银，二价钙镁钡氧锌\n三铝四硅五价磷，铜汞一二铁二三',
    relatedKps: ['M005']
  },
  {
    id: 'q014', kpId: 'M005', type: 'fill', difficulty: 2,
    stem: '请填空：\n铁元素常见化合价有 ____ 和 ____；\n铜元素常见化合价有 ____ 和 ____。',
    answer: '+2;+3;+1;+2',
    altAnswers: ['+2,+3,+1,+2', '+3;+2;+2;+1'],
    explanation: '"铜汞一二铁二三"：\n• 铁 Fe：**+2、+3**（如 FeCl₂ 中 +2，Fe₂O₃ 中 +3）\n• 铜 Cu：**+1、+2**（如 Cu₂O 中 +1，CuO 中 +2）\n• 汞 Hg：+1、+2\n\n💡 铁在置换反应中显 +2（Fe + 2HCl = FeCl₂ + H₂↑）；与 Cl₂、O₂(高温) 反应显 +3。',
    relatedKps: ['M005']
  },
  {
    id: 'q015', kpId: 'M005', type: 'choice', difficulty: 3,
    stem: '下列说法中正确的是？',
    options: [
      'A. 单质中元素的化合价不一定为 0',
      'B. 化合物中各元素正负化合价的代数和不一定为 0',
      'C. 氧元素的化合价一定为 −2',
      'D. 氢元素的化合价通常为 +1'
    ],
    answer: 'D',
    explanation: '化合价规则：\n• A 错：单质中元素化合价**一定**为 0（如 O₂ 中 O 为 0）\n• B 错：化合物中正负代数和**一定**为 0\n• C 错：氧元素**通常**为 −2，但**过氧化氢 H₂O₂ 中 O 为 −1**\n• D 正确：氢元素通常为 +1（除 NaH 等氢化物中为 −1，初中不常考）\n\n💡 高频陷阱：H₂O₂ 中 O 是 −1 价不是 −2 价。',
    relatedKps: ['M005']
  },

  // ============================================================
  // M006 · 由化学式求化合价
  // ============================================================
  {
    id: 'q016', kpId: 'M006', type: 'choice', difficulty: 1,
    stem: 'KMnO₄ 中锰（Mn）元素的化合价是？',
    options: ['A. +4', 'B. +6', 'C. +7', 'D. +2'],
    answer: 'C',
    explanation: '设 Mn 化合价为 x：\nK 是 +1，O 是 −2\n根据"化合物中正负代数和为 0"：\n(+1) + x + (−2)×4 = 0\nx = +7\n\n答案 C。\n\n💡 Mn 在不同物质中化合价变化大：KMnO₄ +7、K₂MnO₄ +6、MnO₂ +4。',
    relatedKps: ['M006', 'M005']
  },
  {
    id: 'q017', kpId: 'M006', type: 'fill', difficulty: 2,
    stem: '求下列物质中加点元素的化合价：\nNH₄NO₃ 中前一个 N 是 ____ 价，后一个 N 是 ____ 价。',
    answer: '-3;+5',
    altAnswers: ['−3;+5', '-3,+5'],
    explanation: '硝酸铵 NH₄NO₃ 实际是 NH₄⁺ 和 NO₃⁻ 组成。\n\n**前一个 N（在 NH₄⁺ 中）**：\n设 N 为 x，H 为 +1，整体为 +1\nx + (+1)×4 = +1，x = **−3**\n\n**后一个 N（在 NO₃⁻ 中）**：\n设 N 为 y，O 为 −2，整体为 −1\ny + (−2)×3 = −1，y = **+5**\n\n💡 同种元素在同一物质中可显**不同**化合价，是中考易错点。',
    relatedKps: ['M006', 'M005']
  },
  {
    id: 'q018', kpId: 'M006', type: 'choice', difficulty: 3,
    stem: 'Na₂FeO₄ 中铁元素的化合价是？',
    options: ['A. +2', 'B. +3', 'C. +6', 'D. +7'],
    answer: 'C',
    explanation: '设 Fe 化合价为 x：\nNa 是 +1，O 是 −2\n(+1)×2 + x + (−2)×4 = 0\n2 + x − 8 = 0\nx = **+6**\n\n答案 C。\n\n💡 这种"特殊化合价"题常考一些不常见的物质（高铁酸钠 Na₂FeO₄ 是新型饮用水消毒剂），考的就是化合价计算的通用方法。',
    relatedKps: ['M006', 'M005']
  },

  // ============================================================
  // M007 · 由化合价写化学式
  // ============================================================
  {
    id: 'q019', kpId: 'M007', type: 'choice', difficulty: 1,
    stem: '已知铝是 +3 价，氧是 −2 价，氧化铝的化学式是？',
    options: ['A. AlO', 'B. Al₂O₃', 'C. Al₃O₂', 'D. AlO₂'],
    answer: 'B',
    explanation: '由化合价写化学式步骤：\n1. 标价：Al(+3) O(−2)\n2. 求最小公倍数：3 和 2 的最小公倍数 = 6\n3. 求原子个数：Al = 6÷3 = **2 个**；O = 6÷2 = **3 个**\n4. 写：**Al₂O₃**\n\n💡 口诀："正左负右，价数交叉"——交叉后写下标。',
    relatedKps: ['M007', 'M005']
  },
  {
    id: 'q020', kpId: 'M007', type: 'fill', difficulty: 2,
    stem: '写出下列化合物的化学式：\n氢氧化铁（Fe⁺³）：____\n硝酸钙：____\n硫酸铵：____',
    answer: 'Fe(OH)3;Ca(NO3)2;(NH4)2SO4',
    altAnswers: ['Fe(OH)₃;Ca(NO₃)₂;(NH₄)₂SO₄', 'Fe(OH)3,Ca(NO3)2,(NH4)2SO4'],
    explanation: '原子团多于一个时要加括号：\n• 氢氧化铁：Fe(+3) OH(−1)，交叉得 Fe(OH)₃ ← 3 个 OH 要加括号\n• 硝酸钙：Ca(+2) NO₃(−1)，交叉得 Ca(NO₃)₂\n• 硫酸铵：NH₄(+1) SO₄(−2)，交叉得 (NH₄)₂SO₄\n\n💡 加括号原则：原子团个数 ≥ 2 时必须加括号。',
    relatedKps: ['M007', 'M003']
  },
  {
    id: 'q021', kpId: 'M007', type: 'choice', difficulty: 3,
    stem: '下列化学式书写**正确**的是？',
    options: ['A. NaOH₂', 'B. CaCO₃', 'C. AlCl', 'D. K₂(NO₃)'],
    answer: 'B',
    explanation: '逐项分析：\n• A 错：钠是 +1 价，氢氧根 −1 价，应为 NaOH\n• B 正确：钙 +2，碳酸根 −2，CaCO₃ ✓\n• C 错：铝 +3，氯 −1，应为 AlCl₃\n• D 错：钾 +1，硝酸根 −1，应为 KNO₃（一个原子团不加括号）\n\n💡 一个原子团不加括号是细节坑：写 KNO₃ 不写 K(NO₃)。',
    relatedKps: ['M007']
  },

  // ============================================================
  // M008 · 单质在氧气中燃烧
  // ============================================================
  {
    id: 'q022', kpId: 'M008', type: 'fill', difficulty: 1,
    stem: '写出铁丝在氧气中燃烧的化学方程式：',
    answer: '3Fe+2O2=点燃=Fe3O4',
    altAnswers: ['3Fe + 2O2 = 点燃 = Fe3O4', '3Fe+2O₂=点燃=Fe₃O₄', '3Fe+2O2 点燃 Fe3O4'],
    explanation: '正确：3Fe + 2O₂ —点燃→ Fe₃O₄\n\n要点：\n① 配平：左 3Fe、4O；右 3Fe、4O ✓\n② 条件"点燃"必须写\n③ 产物是 **Fe₃O₄**（黑色固体），**不是 Fe₂O₃**\n④ 现象：剧烈燃烧、火星四射、放热、生成黑色固体',
    relatedKps: ['M008']
  },
  {
    id: 'q023', kpId: 'M008', type: 'choice', difficulty: 2,
    stem: '下列化学方程式书写完全正确的是？',
    options: [
      'A. P + O₂ —点燃→ PO₂',
      'B. 4P + 5O₂ —点燃→ 2P₂O₅',
      'C. 2Mg + O₂ = 2MgO',
      'D. C + O₂ —点燃→ CO'
    ],
    answer: 'B',
    explanation: '• A 错：磷的氧化物是 P₂O₅，不是 PO₂\n• B 正确：4P + 5O₂ —点燃→ 2P₂O₅（红磷燃烧产生大量白烟）✓\n• C 错：缺少条件"点燃"\n• D 错：C 在氧气**充足**时生成 CO₂，写 CO 不规范（不充足时另一个方程式）\n\n💡 P₂O₅ 是红磷燃烧的产物，"产生大量白烟"是其特征现象，常用于测空气中氧气含量。',
    relatedKps: ['M008']
  },
  {
    id: 'q024', kpId: 'M008', type: 'fill', difficulty: 3,
    stem: '硫粉在氧气中燃烧的化学方程式：____\n该反应的现象是：____',
    answer: 'S+O2=点燃=SO2;发出明亮的蓝紫色火焰，放热，生成有刺激性气味的气体',
    altAnswers: ['S+O₂=点燃=SO₂;明亮的蓝紫色火焰，放热，生成有刺激性气味的气体'],
    explanation: '方程式：S + O₂ —点燃→ SO₂（已配平，无需系数）\n\n现象：\n• 在**氧气中**：明亮的**蓝紫色**火焰\n• 在**空气中**：微弱的**淡蓝色**火焰\n• 都生成**有刺激性气味**的气体（SO₂）\n\n💡 实验时集气瓶底加少量水：**吸收 SO₂**，防止污染空气。',
    relatedKps: ['M008', 'M029', 'X002']
  },

  // ============================================================
  // M009 · 气体可燃物燃烧
  // ============================================================
  {
    id: 'q025', kpId: 'M009', type: 'fill', difficulty: 1,
    stem: '写出甲烷（CH₄）在氧气中完全燃烧的化学方程式：',
    answer: 'CH4+2O2=点燃=CO2+2H2O',
    altAnswers: ['CH₄+2O₂=点燃=CO₂+2H₂O', 'CH4 + 2O2 = 点燃 = CO2 + 2H2O'],
    explanation: '正确：CH₄ + 2O₂ —点燃→ CO₂ + 2H₂O\n\n配平方法（观察法）：\n• 左 1C，右 1C ✓\n• 左 4H，右 2H₂O = 4H ✓\n• 左 2O₂ = 4O，右 1×2 + 2×1 = 4O ✓\n\n💡 甲烷是天然气主要成分，"洁净燃料"——产物只有 CO₂ 和 H₂O，无污染。',
    relatedKps: ['M009']
  },
  {
    id: 'q026', kpId: 'M009', type: 'fill', difficulty: 2,
    stem: '写出氢气在空气中燃烧的化学方程式：____\n现象：____',
    answer: '2H2+O2=点燃=2H2O;产生淡蓝色火焰，放热，烧杯内壁有水珠生成',
    altAnswers: ['2H₂+O₂=点燃=2H₂O;淡蓝色火焰，放热，烧杯内壁有水珠'],
    explanation: '方程式：2H₂ + O₂ —点燃→ 2H₂O\n\n现象三要点：\n① **淡蓝色**火焰（注意是淡蓝色，不是蓝紫色那是硫）\n② 放热\n③ 烧杯内壁有水珠（产物是 H₂O）\n\n💡 点燃前必须**验纯**——不纯的氢气会爆炸。',
    relatedKps: ['M009', 'X002']
  },
  {
    id: 'q027', kpId: 'M009', type: 'choice', difficulty: 3,
    stem: '酒精（C₂H₅OH）在氧气中充分燃烧的化学方程式正确的是？',
    options: [
      'A. C₂H₅OH + 3O₂ —点燃→ 2CO₂ + 3H₂O',
      'B. C₂H₅OH + O₂ —点燃→ CO₂ + H₂O',
      'C. 2C₂H₅OH + 5O₂ —点燃→ 4CO₂ + 6H₂O',
      'D. C₂H₅OH + 2O₂ —点燃→ 2CO + 3H₂O'
    ],
    answer: 'A',
    explanation: '正确答案 A：C₂H₅OH + 3O₂ —点燃→ 2CO₂ + 3H₂O\n\n配平验证：\n• C：左 2，右 2 ✓\n• H：左 6，右 6 ✓\n• O：左 1+6=7，右 4+3=7 ✓\n\n• B 错：未配平\n• C 错：可化简为 A\n• D 错：充分燃烧应生成 CO₂ 不是 CO\n\n💡 酒精是常用的清洁燃料，化学式 C₂H₅OH（也写作 C₂H₆O）。',
    relatedKps: ['M009']
  },

  // ============================================================
  // M010 · 加热分解类
  // ============================================================
  {
    id: 'q028', kpId: 'M010', type: 'fill', difficulty: 1,
    stem: '写出实验室用高锰酸钾制取氧气的化学方程式：',
    answer: '2KMnO4=△=K2MnO4+MnO2+O2↑',
    altAnswers: ['2KMnO₄=△=K₂MnO₄+MnO₂+O₂↑', '2KMnO4 △ K2MnO4+MnO2+O2↑'],
    explanation: '正确：2KMnO₄ —△→ K₂MnO₄ + MnO₂ + O₂↑\n\n要点：\n① 条件：**△（加热）**\n② 三个产物缺一不可：锰酸钾、二氧化锰、氧气\n③ O₂ 是气体要写 **↑**\n④ MnO₂ 既是产物也可作其他反应的催化剂——本反应中是**生成物不是催化剂**\n\n💡 这是分解反应（一变多）。',
    relatedKps: ['M010']
  },
  {
    id: 'q029', kpId: 'M010', type: 'choice', difficulty: 2,
    stem: '关于 2KClO₃ —MnO₂△→ 2KCl + 3O₂↑ 反应，下列说法正确的是？',
    options: [
      'A. MnO₂ 是反应物',
      'B. 反应不需要加热',
      'C. MnO₂ 在反应中起催化作用',
      'D. 反应类型是化合反应'
    ],
    answer: 'C',
    explanation: '• A 错：MnO₂ 写在等号上方是**催化剂**，不是反应物\n• B 错：条件"△"表示**需要加热**\n• C 正确：MnO₂ 加快 KClO₃ 分解速率，是催化剂 ✓\n• D 错：1 种变 2 种，是**分解反应**\n\n💡 区别：实验室制 O₂ 三个方法的反应类型都是分解反应；催化剂在 H₂O₂、KClO₃ 反应中都是 MnO₂。',
    relatedKps: ['M010', 'U001']
  },
  {
    id: 'q030', kpId: 'M010', type: 'fill', difficulty: 3,
    stem: '工业上高温煅烧石灰石制生石灰的化学方程式：____\n该反应在高炉炼铁中也有应用，作用是：____',
    answer: 'CaCO3=高温=CaO+CO2↑;除去铁矿石中的二氧化硅杂质',
    altAnswers: ['CaCO₃=高温=CaO+CO₂↑;将SiO2转化为炉渣除去'],
    explanation: '方程式：CaCO₃ —高温→ CaO + CO₂↑\n\n应用：\n• 工业制 CO₂ 的原理\n• 工业制生石灰（CaO）的方法\n• **高炉炼铁**中加入石灰石的作用：CaO 与铁矿石中的 SiO₂ 反应生成炉渣（CaSiO₃），从而除去杂质\n\n💡 注意区别：实验室制 CO₂ 用 CaCO₃ + 稀盐酸（M019），不用高温煅烧（不便于操作）。',
    relatedKps: ['M010', 'M019']
  },

  // ============================================================
  // M011 · H2O2 分解 / 水电解
  // ============================================================
  {
    id: 'q031', kpId: 'M011', type: 'fill', difficulty: 1,
    stem: '写出过氧化氢在二氧化锰催化下分解的化学方程式：',
    answer: '2H2O2=MnO2=2H2O+O2↑',
    altAnswers: ['2H₂O₂=MnO₂=2H₂O+O₂↑', '2H2O2 MnO2 2H2O+O2↑'],
    explanation: '正确：2H₂O₂ —MnO₂→ 2H₂O + O₂↑\n\n要点：\n① MnO₂ 写在等号上方，是**催化剂**\n② 条件不是△（不需要加热！这是和 KClO₃ 制 O₂ 的关键区别）\n③ O₂ 写 ↑\n④ 反应类型：分解反应\n\n💡 实验室常用此法制 O₂：装置简单（固液常温型）、操作方便。',
    relatedKps: ['M011', 'U001']
  },
  {
    id: 'q032', kpId: 'M011', type: 'fill', difficulty: 2,
    stem: '电解水的化学方程式：____\n正负极产生的气体体积比（正:负）：____',
    answer: '2H2O=通电=2H2↑+O2↑;1:2',
    altAnswers: ['2H₂O=通电=2H₂↑+O₂↑;1比2', '2H2O 通电 2H2↑+O2↑;1:2'],
    explanation: '方程式：2H₂O —通电→ 2H₂↑ + O₂↑\n\n体积比：**正氧负氢，氢二氧一**\n• 正极：氧气（体积小）\n• 负极：氢气（体积大，是氧气的 2 倍）\n• 正:负 = 1:2\n\n实验意义：\n① 证明水由 H、O 元素组成\n② 化学变化中分子可分、原子不可分\n\n💡 加 NaOH 或 Na₂SO₄ 是为了**增强导电性**，不参加反应。',
    relatedKps: ['M011', 'U002']
  },
  {
    id: 'q033', kpId: 'M011', type: 'choice', difficulty: 3,
    stem: '水通电分解 36g 水，可生成氢气的质量是？（H：1，O：16）',
    options: ['A. 2g', 'B. 4g', 'C. 8g', 'D. 32g'],
    answer: 'B',
    explanation: '方程式：2H₂O —通电→ 2H₂↑ + O₂↑\n质量比：2×18 : 2×2 : 32 = 36 : 4 : 32\n\n36g 水 → **4g H₂** + 32g O₂\n\n验证（质量守恒）：4 + 32 = 36 ✓\n\n答案 B。\n\n💡 这是化学方程式计算的基础题，掌握"质量比"是关键。',
    relatedKps: ['M011', 'U002']
  },

  // ============================================================
  // M012 · 金属 + 稀盐酸
  // ============================================================
  {
    id: 'q034', kpId: 'M012', type: 'fill', difficulty: 1,
    stem: '写出锌与稀盐酸反应的化学方程式：',
    answer: 'Zn+2HCl=ZnCl2+H2↑',
    altAnswers: ['Zn+2HCl=ZnCl₂+H₂↑'],
    explanation: '正确：Zn + 2HCl = ZnCl₂ + H₂↑\n\n要点：\n① 锌是 +2 价 → ZnCl₂\n② H₂ 写 ↑（生成气体）\n③ 反应类型：置换反应\n④ 这是**实验室制 H₂ 的标准反应**\n\n💡 常考易错：不要写成 Zn + HCl = ZnCl + H₂↑（Cl 不平衡）。',
    relatedKps: ['M012']
  },
  {
    id: 'q035', kpId: 'M012', type: 'fill', difficulty: 2,
    stem: '写出铁与稀盐酸反应的化学方程式：____\n铁元素在该反应中显 ____ 价。',
    answer: 'Fe+2HCl=FeCl2+H2↑;+2',
    altAnswers: ['Fe+2HCl=FeCl₂+H₂↑;+2', 'Fe+2HCl=FeCl2+H2↑;2'],
    explanation: '方程式：Fe + 2HCl = FeCl₂ + H₂↑\n\n铁元素显 **+2 价**，不是 +3 价。\n\n💡 重要规律：\n• 铁在置换反应（与酸/盐溶液）中，生成的化合物**铁元素显 +2 价**\n• 铁在化合反应中（与 Cl₂、O₂高温），可显 +3 价\n• 现象：浅绿色 FeCl₂ 溶液（含 Fe²⁺）',
    relatedKps: ['M012', 'M002']
  },
  {
    id: 'q036', kpId: 'M012', type: 'choice', difficulty: 3,
    stem: '将下列金属分别加入足量稀盐酸中，能产生氢气且生成的盐溶液为浅绿色的是？',
    options: ['A. Fe', 'B. Cu', 'C. Mg', 'D. Zn'],
    answer: 'A',
    explanation: '逐项分析：\n• "能产生氢气" → 金属必须在 H 之前 → 排除 B（Cu 在 H 后）\n• "盐溶液浅绿色" → 含 **Fe²⁺** 的溶液\n\n• A Fe：Fe + 2HCl = FeCl₂ + H₂↑，生成 **浅绿色** FeCl₂ ✓\n• B Cu：不反应\n• C Mg：MgCl₂ 是无色\n• D Zn：ZnCl₂ 是无色\n\n💡 离子颜色记忆：\n• **Fe²⁺ — 浅绿色**（如 FeCl₂、FeSO₄）\n• **Fe³⁺ — 黄色**（如 FeCl₃、Fe₂(SO₄)₃）\n• **Cu²⁺ — 蓝色**（如 CuSO₄、CuCl₂）\n\n注意：铁与稀盐酸反应生成 +2 价铁（不是 +3 价），是中考易错点。',
    relatedKps: ['M012', 'M002']
  },

  // ============================================================
  // M013 · 金属 + 稀硫酸
  // ============================================================
  {
    id: 'q037', kpId: 'M013', type: 'fill', difficulty: 1,
    stem: '写出镁与稀硫酸反应的化学方程式：',
    answer: 'Mg+H2SO4=MgSO4+H2↑',
    altAnswers: ['Mg+H₂SO₄=MgSO₄+H₂↑'],
    explanation: '正确：Mg + H₂SO₄ = MgSO₄ + H₂↑\n\n要点：\n① Mg 是 +2 价 → MgSO₄\n② SO₄²⁻ 整体替换 H⁺\n③ 反应剧烈，放热\n④ 现象：金属溶解，产生气泡\n\n💡 实验室制 H₂ 也可用 Zn + 稀 H₂SO₄（不用浓硫酸，因为浓硫酸有强氧化性，反应不生成 H₂）。',
    relatedKps: ['M013']
  },
  {
    id: 'q038', kpId: 'M013', type: 'fill', difficulty: 2,
    stem: '写出铝与稀硫酸反应的化学方程式：',
    answer: '2Al+3H2SO4=Al2(SO4)3+3H2↑',
    altAnswers: ['2Al+3H₂SO₄=Al₂(SO₄)₃+3H₂↑'],
    explanation: '正确：2Al + 3H₂SO₄ = Al₂(SO₄)₃ + 3H₂↑\n\n配平要点：\n• Al 是 +3 价，SO₄ 是 −2 价 → Al₂(SO₄)₃\n• 左 2Al，右 2Al ✓\n• 左 3 个 SO₄，右 3 个 SO₄ ✓\n• 左 6H，右 3H₂ = 6H ✓\n\n💡 配平思路：先把 Al₂(SO₄)₃ 写对，再配平 Al 和 H₂。',
    relatedKps: ['M013', 'M007']
  },
  {
    id: 'q039', kpId: 'M013', type: 'choice', difficulty: 3,
    stem: '等质量的 Mg、Al、Zn、Fe 分别与足量稀硫酸反应，生成 H₂ 质量最多的是？（相对原子质量：Mg 24、Al 27、Zn 65、Fe 56）',
    options: ['A. Mg', 'B. Al', 'C. Zn', 'D. Fe'],
    answer: 'B',
    explanation: '设各金属质量都是 m，根据方程式算 H₂ 质量：\n• Mg + H₂SO₄ → H₂：H₂ = m/24 × 2 = m/12\n• 2Al + 3H₂SO₄ → 3H₂：H₂ = m/27 × 3/2 × 2 = **m/9**\n• Zn + H₂SO₄ → H₂：H₂ = m/65 × 2 = m/32.5\n• Fe + H₂SO₄ → H₂：H₂ = m/56 × 2 = m/28\n\n比较：m/9 > m/12 > m/28 > m/32.5\n→ Al > Mg > Fe > Zn\n\n答案 **B（Al）** 最多。\n\n💡 中考常考结论："等质量金属与足量酸反应放 H₂：**Al > Mg > Fe > Zn**"。',
    relatedKps: ['M013']
  },

  // ============================================================
  // M014 · 金属 + 盐溶液
  // ============================================================
  {
    id: 'q040', kpId: 'M014', type: 'fill', difficulty: 1,
    stem: '写出"湿法炼铜"（曾青得铁则化为铜）的化学方程式：',
    answer: 'Fe+CuSO4=FeSO4+Cu',
    altAnswers: ['Fe+CuSO₄=FeSO₄+Cu'],
    explanation: '正确：Fe + CuSO₄ = FeSO₄ + Cu\n\n现象：\n① 铁表面有**红色固体**（Cu）析出\n② **蓝色**溶液（CuSO₄）逐渐变为**浅绿色**（FeSO₄）\n\n💡 这是中国古代化学贡献——西汉时期发现，是世界湿法冶金的先驱。',
    relatedKps: ['M014', 'M002']
  },
  {
    id: 'q041', kpId: 'M014', type: 'fill', difficulty: 2,
    stem: '写出铜与硝酸银溶液反应的化学方程式：____\n现象：____',
    answer: 'Cu+2AgNO3=Cu(NO3)2+2Ag;铜表面有银白色固体析出，无色溶液变蓝',
    altAnswers: ['Cu+2AgNO₃=Cu(NO₃)₂+2Ag;银白色固体析出，溶液变蓝'],
    explanation: '方程式：Cu + 2AgNO₃ = Cu(NO₃)₂ + 2Ag\n\n现象：\n① 铜表面有**银白色固体**（Ag）析出\n② 无色 AgNO₃ 溶液逐渐变为**蓝色**（Cu(NO₃)₂）\n\n💡 含 Cu²⁺ 的溶液都是蓝色，可用此现象证明铜的活动性比银强。',
    relatedKps: ['M014']
  },
  {
    id: 'q042', kpId: 'M014', type: 'choice', difficulty: 3,
    stem: '将一定量铁粉加入 AgNO₃ 和 Cu(NO₃)₂ 的混合溶液中，充分反应后过滤，滤渣中一定有的金属是？',
    options: ['A. 只有 Ag', 'B. Ag 和 Cu', 'C. Ag、Cu、Fe', 'D. 只有 Cu'],
    answer: 'A',
    explanation: '反应顺序：金属活动性 Fe > Cu > Ag\n→ Fe **先**与 AgNO₃ 反应（活动性差越大，反应越优先），再与 Cu(NO₃)₂ 反应\n\n讨论：\n• Fe 极少 → 只有部分 AgNO₃ 反应 → 滤渣只有 Ag\n• Fe 适量 → AgNO₃ 全反应，部分 Cu(NO₃)₂ 反应 → 滤渣 Ag、Cu\n• Fe 过量 → 三者都被置换 → 滤渣 Ag、Cu、Fe\n\n**无论 Fe 多少，Ag 一定析出**（因为 Ag 优先反应）。\n\n答案 **A**。\n\n💡 这是典型的"滤渣滤液"分析题，思路：金属排序+反应顺序+用量讨论。',
    relatedKps: ['M014', 'M002']
  },

  // ============================================================
  // M015 · H2/C 还原氧化物
  // ============================================================
  {
    id: 'q043', kpId: 'M015', type: 'fill', difficulty: 1,
    stem: '写出氢气还原氧化铜的化学方程式：',
    answer: 'H2+CuO=△=Cu+H2O',
    altAnswers: ['H₂+CuO=△=Cu+H₂O'],
    explanation: '正确：H₂ + CuO —△→ Cu + H₂O\n\n要点：\n① 条件是**△**（加热），不是高温\n② 现象：黑色 CuO 变红色 Cu，试管口有水珠\n③ 反应类型：置换反应\n\n💡 实验注意：\n• 实验前**先通 H₂ 排尽空气**再加热（防爆）\n• 实验后**先停止加热再停 H₂**（防生成的 Cu 重新被氧化）',
    relatedKps: ['M015']
  },
  {
    id: 'q044', kpId: 'M015', type: 'fill', difficulty: 2,
    stem: '写出炭还原氧化铜的化学方程式：',
    answer: 'C+2CuO=高温=2Cu+CO2↑',
    altAnswers: ['C+2CuO=高温=2Cu+CO₂↑'],
    explanation: '正确：C + 2CuO —高温→ 2Cu + CO₂↑\n\n要点：\n① 条件是**高温**（不是△，因为 C 与 CuO 反应需要更高温度）\n② 是置换反应（单质 C 换出单质 Cu）\n③ CO₂ 写 ↑\n\n💡 易混点：\n• H₂ + CuO 用 △\n• C + CuO 用 高温\n这是初中阶段固定的差异，不要写错条件！',
    relatedKps: ['M015']
  },
  {
    id: 'q045', kpId: 'M015', type: 'fill', difficulty: 3,
    stem: '写出氢气还原氧化铁的化学方程式：____\n该反应中 ____ 是还原剂，____ 是氧化剂。',
    answer: '3H2+Fe2O3=高温=2Fe+3H2O;H2;Fe2O3',
    altAnswers: ['3H₂+Fe₂O₃=高温=2Fe+3H₂O;H₂;Fe₂O₃'],
    explanation: '方程式：3H₂ + Fe₂O₃ —高温→ 2Fe + 3H₂O\n\n配平：\n• Fe：左 2，右 2 ✓\n• O：左 3，右 3 ✓\n• H：左 6，右 6 ✓\n\n氧化还原概念：\n• **还原剂 = 夺氧的物质 = H₂**（自身被氧化变成 H₂O）\n• **氧化剂 = 失氧的物质 = Fe₂O₃**（自身被还原变成 Fe）\n\n💡 口诀："夺氧者还原，失氧者氧化"——还原剂出 H₂、CO、C，氧化剂常见 Fe₂O₃、CuO 等。',
    relatedKps: ['M015']
  },

  // ============================================================
  // M016 · CO 还原氧化物
  // ============================================================
  {
    id: 'q046', kpId: 'M016', type: 'fill', difficulty: 1,
    stem: '写出 CO 还原氧化铜的化学方程式：',
    answer: 'CO+CuO=△=Cu+CO2',
    altAnswers: ['CO+CuO=△=Cu+CO₂'],
    explanation: '正确：CO + CuO —△→ Cu + CO₂\n\n要点：\n① 条件是 **△**（不是高温！与 C+CuO 不同）\n② CO₂ **不写 ↑**（反应物 CO 也是气体）\n③ 不属于基本反应类型（不是置换、化合、分解、复分解）\n\n💡 重要区别：CO + CuO 是 △，C + CuO 是 高温。',
    relatedKps: ['M016']
  },
  {
    id: 'q047', kpId: 'M016', type: 'fill', difficulty: 2,
    stem: '写出工业炼铁的主要反应（以赤铁矿为例）的化学方程式：',
    answer: '3CO+Fe2O3=高温=2Fe+3CO2',
    altAnswers: ['3CO+Fe₂O₃=高温=2Fe+3CO₂'],
    explanation: '正确：3CO + Fe₂O₃ —高温→ 2Fe + 3CO₂\n\n配平：\n• Fe：右 2，所以 Fe₂O₃ 系数为 1\n• O：右 3CO₂ = 6O，左 Fe₂O₃ 已有 3O，需再 3O，所以 CO 系数 3\n• 验证 C：左 3，右 3 ✓；H 无；O：左 3+3=6，右 6 ✓\n\n💡 工业炼铁三大原料：铁矿石、焦炭、石灰石；产品：生铁。\n反应原理：在高温下，**利用焦炭生成的 CO** 把铁从氧化铁里**还原**出来。',
    relatedKps: ['M016', 'M015']
  },
  {
    id: 'q048', kpId: 'M016', type: 'choice', difficulty: 3,
    stem: '关于"CO 还原 Fe₂O₃"实验的下列描述，错误的是？',
    options: [
      'A. 实验前应先通入 CO 一段时间再加热',
      'B. 反应过程中应将尾气直接排放到空气中',
      'C. 红棕色固体逐渐变成黑色',
      'D. 澄清石灰水变浑浊'
    ],
    answer: 'B',
    explanation: '逐项分析：\n• A 正确：先通 CO 排尽装置内空气，防止加热时爆炸\n• B 错误：CO **有毒**，尾气**必须处理**（点燃 / 收集），不能直排 ✗\n• C 正确：Fe₂O₃ 红棕色 → Fe 黑色（实际是黑色铁粉，不是银白色）\n• D 正确：生成 CO₂ 通入石灰水，验证产物\n\n💡 三大注意：\n① 先通 CO 后加热\n② 先停止加热后停 CO\n③ 尾气必须处理（CO 剧毒）',
    relatedKps: ['M016']
  },

  // ============================================================
  // M017 · 酸 + 金属氧化物
  // ============================================================
  {
    id: 'q049', kpId: 'M017', type: 'fill', difficulty: 1,
    stem: '写出稀盐酸除铁锈（主要成分 Fe₂O₃）的化学方程式：',
    answer: 'Fe2O3+6HCl=2FeCl3+3H2O',
    altAnswers: ['Fe₂O₃+6HCl=2FeCl₃+3H₂O'],
    explanation: '正确：Fe₂O₃ + 6HCl = 2FeCl₃ + 3H₂O\n\n要点：\n① 反应类型：复分解反应\n② 条件：常温\n③ Fe 在该反应中显 **+3 价**（与 Fe₂O₃ 中保持一致）\n④ 现象：**铁锈溶解，溶液由无色变为黄色**（Fe³⁺ 黄色）\n\n💡 注意：除铁锈不能用稀硫酸（也可以但成本更高），不能浸泡过久（会与铁反应损坏铁件）。',
    relatedKps: ['M017']
  },
  {
    id: 'q050', kpId: 'M017', type: 'fill', difficulty: 2,
    stem: '写出稀硫酸与氧化铜反应的化学方程式：____\n现象：____',
    answer: 'CuO+H2SO4=CuSO4+H2O;黑色固体逐渐溶解，溶液由无色变为蓝色',
    altAnswers: ['CuO+H₂SO₄=CuSO₄+H₂O;黑色固体溶解，溶液变蓝'],
    explanation: '方程式：CuO + H₂SO₄ = CuSO₄ + H₂O\n\n现象：\n① 黑色固体（CuO）溶解\n② 溶液由无色变**蓝色**（含 Cu²⁺ 的 CuSO₄ 是蓝色）\n\n💡 同样的现象也出现在 CuO + 2HCl = CuCl₂ + H₂O。\n所有含 Cu²⁺ 的溶液都是蓝色。',
    relatedKps: ['M017', 'M030']
  },
  {
    id: 'q051', kpId: 'M017', type: 'choice', difficulty: 3,
    stem: '一定量氧化铁与足量稀盐酸恰好完全反应，反应后溶液中存在的离子是？',
    options: [
      'A. Fe²⁺、Cl⁻、H⁺',
      'B. Fe³⁺、Cl⁻',
      'C. Fe³⁺、Cl⁻、H⁺',
      'D. Fe²⁺、Cl⁻'
    ],
    answer: 'C',
    explanation: '反应：Fe₂O₃ + 6HCl = 2FeCl₃ + 3H₂O\n\n注意题目关键词："**足量稀盐酸**" → HCl 过量\n→ 反应后溶液中：FeCl₃（电离出 Fe³⁺ 和 Cl⁻）+ 剩余 HCl（电离出 H⁺ 和 Cl⁻）\n\n所以离子有：**Fe³⁺、Cl⁻、H⁺**\n\n• A 错：是 Fe³⁺ 不是 Fe²⁺（Fe₂O₃ 中铁是 +3 价）\n• B 错：HCl 过量，还有 H⁺\n• C 正确 ✓\n• D 错：H⁺ 没考虑\n\n💡 陷阱：HCl 过量时溶液中还有 H⁺。',
    relatedKps: ['M017']
  },

  // ============================================================
  // M018 · 酸 + 碱（中和反应）
  // ============================================================
  {
    id: 'q052', kpId: 'M018', type: 'fill', difficulty: 1,
    stem: '写出 NaOH 与稀盐酸反应的化学方程式：',
    answer: 'NaOH+HCl=NaCl+H2O',
    altAnswers: ['NaOH+HCl=NaCl+H₂O'],
    explanation: '正确：NaOH + HCl = NaCl + H₂O\n\n要点：\n① 反应类型：复分解反应（也叫中和反应）\n② 中和反应的实质：H⁺ + OH⁻ = H₂O\n③ 反应放热\n④ 该反应**无现象**——通过指示剂（酚酞由红变无色）验证。',
    relatedKps: ['M018']
  },
  {
    id: 'q053', kpId: 'M018', type: 'fill', difficulty: 2,
    stem: '写出 Ca(OH)₂ 与稀硫酸反应的化学方程式：',
    answer: 'Ca(OH)2+H2SO4=CaSO4+2H2O',
    altAnswers: ['Ca(OH)₂+H₂SO₄=CaSO₄+2H₂O'],
    explanation: '正确：Ca(OH)₂ + H₂SO₄ = CaSO₄ + 2H₂O\n\n配平：\n• Ca：1：1 ✓\n• O：2 + 4 = 6，右 4 + 2 = 6 ✓\n• H：2 + 2 = 4，右 4 ✓\n• S：1：1 ✓\n\n💡 生成的 **CaSO₄ 是微溶物**（不写 ↓）。微溶物在中考中不视为沉淀。',
    relatedKps: ['M018']
  },
  {
    id: 'q054', kpId: 'M018', type: 'choice', difficulty: 3,
    stem: '中和反应的实质是？',
    options: [
      'A. 酸和碱混合',
      'B. H⁺ + OH⁻ = H₂O',
      'C. 生成盐和水',
      'D. 溶液变中性'
    ],
    answer: 'B',
    explanation: '中和反应：酸 + 碱 → 盐 + 水\n\n**微观实质（本质）**：H⁺ + OH⁻ = H₂O\n• A 错：混合不一定反应\n• B 正确：所有中和反应的微观本质都是 H⁺ 与 OH⁻ 结合成 H₂O ✓\n• C 错：生成盐和水是宏观现象，不是本质\n• D 错：恰好完全中和才中性，过量则可能呈酸性或碱性\n\n💡 这道题考的是"宏观→微观"的转换思维。',
    relatedKps: ['M018']
  },

  // ============================================================
  // M019 · 酸 + 盐
  // ============================================================
  {
    id: 'q055', kpId: 'M019', type: 'fill', difficulty: 1,
    stem: '写出实验室制取 CO₂ 的化学方程式：',
    answer: 'CaCO3+2HCl=CaCl2+H2O+CO2↑',
    altAnswers: ['CaCO₃+2HCl=CaCl₂+H₂O+CO₂↑'],
    explanation: '正确：CaCO₃ + 2HCl = CaCl₂ + H₂O + CO₂↑\n\n要点：\n① 实验室常用：石灰石或大理石（主要成分 CaCO₃）+ **稀盐酸**\n② **不用稀硫酸**：会生成微溶 CaSO₄ 覆盖在 CaCO₃ 表面阻止反应\n③ **不用浓盐酸**：浓盐酸挥发，使 CO₂ 中混有 HCl 气体\n④ CO₂ 写 ↑\n\n💡 复分解反应：生成水 + 气体（CO₂↑），符合复分解条件。',
    relatedKps: ['M019']
  },
  {
    id: 'q056', kpId: 'M019', type: 'fill', difficulty: 2,
    stem: '写出胃药小苏打（NaHCO₃）治疗胃酸过多的化学方程式：',
    answer: 'NaHCO3+HCl=NaCl+H2O+CO2↑',
    altAnswers: ['NaHCO₃+HCl=NaCl+H₂O+CO₂↑'],
    explanation: '正确：NaHCO₃ + HCl = NaCl + H₂O + CO₂↑\n\n胃酸的主要成分是 HCl，小苏打与之反应消耗 HCl，缓解胃酸过多。\n\n💡 类似的胃药：氢氧化铝 Al(OH)₃、氢氧化镁 Mg(OH)₂（碱性物质中和胃酸）。',
    relatedKps: ['M019']
  },
  {
    id: 'q057', kpId: 'M019', type: 'choice', difficulty: 3,
    stem: '下列各组物质的反应，能产生气体的是？',
    options: [
      'A. NaCl 溶液 + 稀盐酸',
      'B. Na₂CO₃ + 稀硫酸',
      'C. AgNO₃ + 稀盐酸',
      'D. BaCl₂ + 稀硫酸'
    ],
    answer: 'B',
    explanation: '逐项分析：\n• A NaCl + HCl：均为 Na⁺/Cl⁻/H⁺/Cl⁻，无新物质，不反应\n• B Na₂CO₃ + H₂SO₄ = Na₂SO₄ + H₂O + **CO₂↑** ✓\n• C AgNO₃ + HCl = **AgCl↓** + HNO₃（产生白色沉淀，不是气体）\n• D BaCl₂ + H₂SO₄ = **BaSO₄↓** + 2HCl（产生白色沉淀，不是气体）\n\n答案 B。\n\n💡 含 CO₃²⁻ 或 HCO₃⁻ 的盐 + 酸 = 一定产生 CO₂↑。',
    relatedKps: ['M019', 'T001']
  },

  // ============================================================
  // M020 · 碱 + 非金属氧化物
  // ============================================================
  {
    id: 'q058', kpId: 'M020', type: 'fill', difficulty: 1,
    stem: '写出 NaOH 吸收 CO₂ 的化学方程式：',
    answer: '2NaOH+CO2=Na2CO3+H2O',
    altAnswers: ['2NaOH+CO₂=Na₂CO₃+H₂O'],
    explanation: '正确：2NaOH + CO₂ = Na₂CO₃ + H₂O\n\n要点：\n① 反应类型：**不属于四种基本反应类型**（不是化合/分解/置换/复分解）\n② 现象：无明显现象（NaOH 是无色液体）\n③ 应用：① 实验中用 NaOH 溶液吸收 CO₂ ② NaOH **变质**的原因（敞口放置吸收空气中的 CO₂）\n\n💡 检验 NaOH 是否变质：滴入稀盐酸，有气泡产生说明已变质（生成 Na₂CO₃）。',
    relatedKps: ['M020']
  },
  {
    id: 'q059', kpId: 'M020', type: 'fill', difficulty: 2,
    stem: '写出 Ca(OH)₂ 与 CO₂ 反应的化学方程式：____\n这是 ____ 的原理。',
    answer: 'Ca(OH)2+CO2=CaCO3↓+H2O;检验二氧化碳',
    altAnswers: ['Ca(OH)₂+CO₂=CaCO₃↓+H₂O;检验CO2'],
    explanation: '方程式：Ca(OH)₂ + CO₂ = CaCO₃↓ + H₂O\n\n现象：澄清石灰水变浑浊（生成 CaCO₃ 白色沉淀）\n\n应用：\n• **检验 CO₂** 的标准方法 ✓\n• 解释：石灰水放置在空气中表面有白膜（吸收 CO₂ 生成 CaCO₃）\n• 解释：用石灰水抹墙，干燥过程中变硬（与 CO₂ 反应）',
    relatedKps: ['M020']
  },
  {
    id: 'q060', kpId: 'M020', type: 'choice', difficulty: 3,
    stem: '下列反应不属于四种基本反应类型（化合、分解、置换、复分解）的是？',
    options: [
      'A. 2NaOH + CO₂ = Na₂CO₃ + H₂O',
      'B. CaCO₃ + 2HCl = CaCl₂ + H₂O + CO₂↑',
      'C. Fe + CuSO₄ = FeSO₄ + Cu',
      'D. CO₂ + H₂O = H₂CO₃'
    ],
    answer: 'A',
    explanation: '判断各反应类型：\n• A：NaOH（碱）+ CO₂（非金属氧化物）→ Na₂CO₃ + H₂O\n  这是 "碱+非金属氧化物" 反应——**不属于四种基本反应类型** ✓\n• B：CaCO₃（盐）+ HCl（酸）→ 互换成分 → 复分解反应\n• C：Fe（单质）+ CuSO₄（化合物）→ 单换单 → 置换反应\n• D：2 种 → 1 种 → 化合反应\n\n💡 "不属于四种基本反应类型"的常见反应：\n① 碱 + 非金属氧化物（如 NaOH+CO₂、Ca(OH)₂+CO₂）\n② CO 还原氧化物（如 CO+CuO→Cu+CO₂、CO+Fe₂O₃→Fe+CO₂）\n\n注意：酸+金属氧化物（如 Fe₂O₃+HCl）**属于复分解**，不是反例。',
    relatedKps: ['M020', 'X001']
  },

  // ============================================================
  // M021 · 碱 + 盐
  // ============================================================
  {
    id: 'q061', kpId: 'M021', type: 'fill', difficulty: 1,
    stem: '写出 NaOH 与 CuSO₄ 反应的化学方程式：____\n现象：____',
    answer: '2NaOH+CuSO4=Cu(OH)2↓+Na2SO4;有蓝色沉淀生成',
    altAnswers: ['2NaOH+CuSO₄=Cu(OH)₂↓+Na₂SO₄;蓝色沉淀'],
    explanation: '方程式：2NaOH + CuSO₄ = Cu(OH)₂↓ + Na₂SO₄\n\n现象：生成**蓝色沉淀**（Cu(OH)₂）\n\n💡 蓝色沉淀的特征：\n• Cu(OH)₂ 加热分解：Cu(OH)₂ —△→ CuO + H₂O（变黑）\n• 这是判断溶液中含 Cu²⁺ 的方法之一',
    relatedKps: ['M021']
  },
  {
    id: 'q062', kpId: 'M021', type: 'fill', difficulty: 2,
    stem: '写出 NaOH 与 FeCl₃ 反应的化学方程式：____\n现象：____',
    answer: '3NaOH+FeCl3=Fe(OH)3↓+3NaCl;生成红褐色沉淀',
    altAnswers: ['3NaOH+FeCl₃=Fe(OH)₃↓+3NaCl;红褐色沉淀'],
    explanation: '方程式：3NaOH + FeCl₃ = Fe(OH)₃↓ + 3NaCl\n\n现象：生成**红褐色沉淀**（Fe(OH)₃）\n\n💡 沉淀颜色记忆：\n• 蓝色：Cu(OH)₂\n• 红褐色：Fe(OH)₃\n• 白色：Mg(OH)₂、Al(OH)₃、AgCl、BaSO₄、CaCO₃ 等',
    relatedKps: ['M021', 'M030']
  },
  {
    id: 'q063', kpId: 'M021', type: 'choice', difficulty: 3,
    stem: '工业上用 Ca(OH)₂ 和 Na₂CO₃ 反应制烧碱，化学方程式正确的是？',
    options: [
      'A. Ca(OH)₂ + Na₂CO₃ = CaCO₃↓ + 2NaOH',
      'B. Ca(OH)₂ + Na₂CO₃ = CaCO₃ + 2NaOH',
      'C. 2Ca(OH)₂ + Na₂CO₃ = Ca(CO₃)₂ + 2NaOH',
      'D. Ca(OH)₂ + Na₂CO₃ = CaO + 2NaOH + CO₂↑'
    ],
    answer: 'A',
    explanation: '正确：Ca(OH)₂ + Na₂CO₃ = CaCO₃↓ + 2NaOH\n\n• A 正确 ✓（CaCO₃ 不溶于水，要写 ↓）\n• B 错：CaCO₃ 是沉淀，必须写 ↓\n• C 错：Ca(CO₃)₂ 不存在（钙是 +2 价，CO₃²⁻ 是 −2 价，应化简为 1:1 → CaCO₃）\n• D 错：该反应不会生成 CaO 和 CO₂——溶液中两种盐反应只生成 CaCO₃↓ 和 NaOH（即 A 选项），符合复分解反应的实际过程\n\n💡 工业制 NaOH 两种方法：① 此反应 ② 电解食盐水（中考不常考）。',
    relatedKps: ['M021']
  },

  // ============================================================
  // M022 · 盐 + 盐
  // ============================================================
  {
    id: 'q064', kpId: 'M022', type: 'fill', difficulty: 1,
    stem: '写出 AgNO₃ 与 NaCl 反应的化学方程式：',
    answer: 'AgNO3+NaCl=AgCl↓+NaNO3',
    altAnswers: ['AgNO₃+NaCl=AgCl↓+NaNO₃'],
    explanation: '正确：AgNO₃ + NaCl = AgCl↓ + NaNO₃\n\n要点：\n① 现象：生成**白色沉淀**（AgCl）\n② AgCl **不溶于稀硝酸**——这是检验 Cl⁻ 的依据\n③ 反应类型：复分解反应\n\n💡 检验 Cl⁻ 标准方法：取样 + AgNO₃ 溶液 → 白色沉淀 + 加稀 HNO₃ 不溶解。',
    relatedKps: ['M022']
  },
  {
    id: 'q065', kpId: 'M022', type: 'fill', difficulty: 2,
    stem: '写出 BaCl₂ 与 Na₂SO₄ 反应的化学方程式：____\n现象：____',
    answer: 'BaCl2+Na2SO4=BaSO4↓+2NaCl;生成白色沉淀',
    altAnswers: ['BaCl₂+Na₂SO₄=BaSO₄↓+2NaCl;白色沉淀'],
    explanation: '方程式：BaCl₂ + Na₂SO₄ = BaSO₄↓ + 2NaCl\n\n现象：生成**白色沉淀**（BaSO₄）\n\n💡 检验 SO₄²⁻ 标准方法：取样 + Ba(NO₃)₂ 或 BaCl₂ 溶液 → 白色沉淀 + 加稀 HNO₃ **不溶解**。\n\n注意 AgCl 和 BaSO₄ 都是不溶于稀硝酸的白色沉淀，要根据加的试剂区分。',
    relatedKps: ['M022']
  },
  {
    id: 'q066', kpId: 'M022', type: 'choice', difficulty: 3,
    stem: '下列各组物质能发生反应的是？',
    options: [
      'A. NaCl 溶液 + KNO₃ 溶液',
      'B. Na₂SO₄ 溶液 + KCl 溶液',
      'C. CaCl₂ 溶液 + AgNO₃ 溶液',
      'D. K₂CO₃ 溶液 + NaCl 溶液'
    ],
    answer: 'C',
    explanation: '复分解反应条件：生成物中**有沉淀↓、气体↑或水**。\n\n• A：交换得 NaNO₃ + KCl，全部可溶，**不反应**\n• B：交换得 NaCl + K₂SO₄，全部可溶，**不反应**\n• **C：CaCl₂ + 2AgNO₃ = 2AgCl↓ + Ca(NO₃)₂**，生成白色沉淀 ✓\n• D：交换得 KCl + Na₂CO₃，全部可溶，**不反应**\n\n答案 C。\n\n💡 盐+盐反应能发生的常见组合：含 Ag⁺、Ba²⁺ + 含 Cl⁻、SO₄²⁻、CO₃²⁻ 等会生成沉淀。',
    relatedKps: ['M022', 'T001']
  },

  // ============================================================
  // M023 · 常见酸的化学式
  // ============================================================
  {
    id: 'q067', kpId: 'M023', type: 'choice', difficulty: 1,
    stem: '硫酸的化学式是？',
    options: ['A. HSO₄', 'B. H₂SO₄', 'C. H₂SO₃', 'D. HSO'],
    answer: 'B',
    explanation: '常见酸化学式（必背）：\n• 盐酸 HCl\n• 硫酸 **H₂SO₄** ✓\n• 硝酸 HNO₃\n• 碳酸 H₂CO₃\n• 磷酸 H₃PO₄\n\n• A 错：H₂SO₄ 中 H 是 2 个\n• C 错：H₂SO₃ 是亚硫酸（不稳定），不是硫酸\n• D 错：HSO 不存在\n\n💡 H 的个数 = 酸根化合价的绝对值（如 SO₄ 是 −2 价 → 2 个 H）。',
    relatedKps: ['M023']
  },
  {
    id: 'q068', kpId: 'M023', type: 'fill', difficulty: 2,
    stem: '写出下列酸的化学式：\n盐酸 ____，硝酸 ____，碳酸 ____，磷酸 ____',
    answer: 'HCl;HNO3;H2CO3;H3PO4',
    altAnswers: ['HCl;HNO₃;H₂CO₃;H₃PO₄', 'HCl,HNO3,H2CO3,H3PO4'],
    explanation: '常见酸化学式：\n• 盐酸：**HCl**（实际是 HCl 气体溶于水的水溶液）\n• 硝酸：**HNO₃**\n• 碳酸：**H₂CO₃**（不稳定，受热即分解 H₂CO₃ = H₂O + CO₂↑）\n• 磷酸：**H₃PO₄**（H 的个数 = PO₄³⁻ 的 |−3| = 3）\n\n💡 酸的共性：水溶液中都能电离出 H⁺。',
    relatedKps: ['M023']
  },
  {
    id: 'q069', kpId: 'M023', type: 'choice', difficulty: 3,
    stem: '某酸 H₂R 中 R 元素的化合价是？',
    options: ['A. +1', 'B. +2', 'C. −1', 'D. −2'],
    answer: 'D',
    explanation: '由化学式 H₂R 求 R 的化合价：\n设 R 为 x，H 是 +1，整体为 0（化合物中各元素正负化合价代数和为 0）\n(+1)×2 + x = 0\nx = **−2**\n\n答案 **D**。\n\n💡 这是从酸的化学式反推阴离子化合价的方法。常见的 H₂R 类酸：H₂S（硫化氢，R=S，−2 价）、H₂CO₃（R=CO₃，−2 价）。',
    relatedKps: ['M023', 'M006']
  },

  // ============================================================
  // M024 · 常见碱的化学式
  // ============================================================
  {
    id: 'q070', kpId: 'M024', type: 'fill', difficulty: 1,
    stem: '写出下列碱的化学式：\n氢氧化钠 ____，氢氧化钙 ____，氢氧化钾 ____',
    answer: 'NaOH;Ca(OH)2;KOH',
    altAnswers: ['NaOH;Ca(OH)₂;KOH'],
    explanation: '常见碱化学式：\n• 氢氧化钠 **NaOH**（俗名烧碱、火碱、苛性钠）\n• 氢氧化钙 **Ca(OH)₂**（俗名熟石灰、消石灰）\n• 氢氧化钾 **KOH**\n\n💡 OH⁻ 个数 = 金属离子化合价的数值。Na⁺ 一个 OH，Ca²⁺ 两个 OH 加括号。',
    relatedKps: ['M024']
  },
  {
    id: 'q071', kpId: 'M024', type: 'choice', difficulty: 2,
    stem: '下列物质属于碱的是？',
    options: ['A. CaO', 'B. Ca(OH)₂', 'C. CaCO₃', 'D. CaCl₂'],
    answer: 'B',
    explanation: '碱的定义：在水溶液中**电离出的阴离子全是 OH⁻** 的化合物。\n\n• A CaO 是氧化物（金属氧化物，俗称生石灰）\n• B Ca(OH)₂ 是碱 ✓\n• C CaCO₃ 是盐（碳酸盐）\n• D CaCl₂ 是盐\n\n💡 易混："CaO 是不是碱？"——CaO 不是碱，它是**金属氧化物**！但 CaO + H₂O = Ca(OH)₂ 后，Ca(OH)₂ 才是碱。',
    relatedKps: ['M024']
  },
  {
    id: 'q072', kpId: 'M024', type: 'fill', difficulty: 3,
    stem: '写出氢氧化亚铁、氢氧化铁、氢氧化铝的化学式：____、____、____',
    answer: 'Fe(OH)2;Fe(OH)3;Al(OH)3',
    altAnswers: ['Fe(OH)₂;Fe(OH)₃;Al(OH)₃'],
    explanation: '化学式：\n• 氢氧化亚铁 **Fe(OH)₂**（Fe 为 +2 价，"亚"字表示低价）\n• 氢氧化铁 **Fe(OH)₃**（Fe 为 +3 价）\n• 氢氧化铝 **Al(OH)₃**（Al 为 +3 价）\n\n💡 命名规则：金属有多种化合价时，**低价用"亚"字**（如 Fe²⁺ 叫亚铁）。\n例：FeCl₂ 氯化亚铁；FeCl₃ 氯化铁。',
    relatedKps: ['M024', 'M005']
  },

  // ============================================================
  // M025 · 常见盐的化学式
  // ============================================================
  {
    id: 'q073', kpId: 'M025', type: 'fill', difficulty: 1,
    stem: '写出下列盐的化学式：\n氯化钠 ____，碳酸钠 ____，碳酸钙 ____',
    answer: 'NaCl;Na2CO3;CaCO3',
    altAnswers: ['NaCl;Na₂CO₃;CaCO₃'],
    explanation: '常见盐化学式：\n• 氯化钠 **NaCl**（食盐主要成分）\n• 碳酸钠 **Na₂CO₃**（俗名纯碱、苏打）\n• 碳酸钙 **CaCO₃**（大理石、石灰石主要成分）\n\n💡 注意"纯碱不是碱"——Na₂CO₃ 是盐，但水溶液显碱性（俗名带"碱"是化学历史遗留）。',
    relatedKps: ['M025']
  },
  {
    id: 'q074', kpId: 'M025', type: 'choice', difficulty: 2,
    stem: '碳酸氢钠（小苏打）的化学式是？',
    options: ['A. Na₂CO₃', 'B. NaHCO₃', 'C. NaCO₃', 'D. Na(HCO₃)₂'],
    answer: 'B',
    explanation: '常见易混钠盐化学式：\n• 碳酸钠（纯碱、苏打）：**Na₂CO₃**\n• 碳酸氢钠（小苏打）：**NaHCO₃** ✓\n\n判断：\n• Na 是 +1 价，HCO₃ 是 −1 价（碳酸氢根）\n• 1:1 → NaHCO₃\n\n💡 应用：\n• Na₂CO₃ — 工业（玻璃/造纸）、生活（去油污）\n• NaHCO₃ — 治胃酸过多、做面点发酵粉、干粉灭火器',
    relatedKps: ['M025']
  },
  {
    id: 'q075', kpId: 'M025', type: 'fill', difficulty: 3,
    stem: '写出下列盐的化学式：\n硫酸铜 ____，硝酸银 ____，硫酸钡 ____，氯化铵 ____',
    answer: 'CuSO4;AgNO3;BaSO4;NH4Cl',
    altAnswers: ['CuSO₄;AgNO₃;BaSO₄;NH₄Cl'],
    explanation: '化学式：\n• 硫酸铜 **CuSO₄**（蓝色，水溶液也是蓝色；CuSO₄·5H₂O 是胆矾蓝色晶体）\n• 硝酸银 **AgNO₃**（用于检验 Cl⁻）\n• 硫酸钡 **BaSO₄**（白色不溶沉淀，"钡餐" X 光检查）\n• 氯化铵 **NH₄Cl**（常见铵态氮肥）\n\n💡 CuSO₄ 白色（无水）→ 蓝色（含水），可以用来检验水的存在（CuSO₄ + 5H₂O = CuSO₄·5H₂O，白变蓝）。',
    relatedKps: ['M025']
  },

  // ============================================================
  // M026 · 常见氧化物的化学式
  // ============================================================
  {
    id: 'q076', kpId: 'M026', type: 'fill', difficulty: 1,
    stem: '写出下列氧化物的化学式：\n二氧化碳 ____，二氧化硫 ____，五氧化二磷 ____',
    answer: 'CO2;SO2;P2O5',
    altAnswers: ['CO₂;SO₂;P₂O₅'],
    explanation: '常见非金属氧化物：\n• 二氧化碳 **CO₂**（C 为 +4 价）\n• 二氧化硫 **SO₂**（S 为 +4 价，导致酸雨）\n• 五氧化二磷 **P₂O₅**（红磷燃烧产生的白烟）\n\n💡 命名规律："X 氧化 Y" 式中：左边是数字 + 氧 + Y 元素。如"五氧化二磷"= 5 个氧 + 2 个磷 = P₂O₅。',
    relatedKps: ['M026']
  },
  {
    id: 'q077', kpId: 'M026', type: 'choice', difficulty: 2,
    stem: '关于 Fe₃O₄ 的下列说法**错误**的是？',
    options: [
      'A. Fe₃O₄ 是铁丝在氧气中燃烧的产物',
      'B. Fe₃O₄ 中铁元素都是 +3 价',
      'C. Fe₃O₄ 是黑色固体',
      'D. Fe₃O₄ 俗称磁铁矿'
    ],
    answer: 'B',
    explanation: '逐项分析：\n• A 正确：3Fe + 2O₂ —点燃→ Fe₃O₄ ✓\n• B 错误：Fe₃O₄ 中 Fe 显 **+2 和 +3 两种**化合价（实际是 FeO·Fe₂O₃，1 个 Fe 是 +2、2 个 Fe 是 +3）✗\n• C 正确：黑色固体 ✓\n• D 正确：磁铁矿主要成分 ✓\n\n💡 三种铁的氧化物：\n• FeO（黑） — Fe +2\n• Fe₂O₃（红棕色） — Fe +3，赤铁矿主要成分\n• Fe₃O₄（黑） — Fe 同时存在 +2 和 +3，磁铁矿主要成分',
    relatedKps: ['M026', 'M005']
  },
  {
    id: 'q078', kpId: 'M026', type: 'fill', difficulty: 3,
    stem: '写出下列氧化物的化学式：\n氧化铝 ____，氧化镁 ____，氧化铜 ____，氧化银 ____',
    answer: 'Al2O3;MgO;CuO;Ag2O',
    altAnswers: ['Al₂O₃;MgO;CuO;Ag₂O'],
    explanation: '常见金属氧化物：\n• 氧化铝 **Al₂O₃**（铝土矿主要成分；铝表面致密氧化膜防腐）\n• 氧化镁 **MgO**（白色固体，镁燃烧产物）\n• 氧化铜 **CuO**（黑色固体）\n• 氧化银 **Ag₂O**（Ag 是 +1 价）\n\n💡 由化合价写化学式：\n• Al(+3) O(−2) → Al₂O₃\n• Mg(+2) O(−2) → MgO（化简为 1:1）\n• Cu(+2) O(−2) → CuO\n• Ag(+1) O(−2) → Ag₂O',
    relatedKps: ['M026', 'M007']
  },

  // ============================================================
  // M027 · 元素之最
  // ============================================================
  {
    id: 'q079', kpId: 'M027', type: 'choice', difficulty: 1,
    stem: '地壳中含量最高的元素是？',
    options: ['A. 硅', 'B. 氧', 'C. 铝', 'D. 铁'],
    answer: 'B',
    explanation: '地壳中元素含量前 5 位（必背）：\n**氧 > 硅 > 铝 > 铁 > 钙**\n（O > Si > Al > Fe > Ca）\n\n注意：\n• **地壳中含量最高的元素是氧**（不是铝！）\n• **地壳中含量最高的金属元素是铝**（不是铁！）\n\n💡 这两个考点经常出选择题混淆——"元素"包括非金属，铝只是"金属元素"中的第一。',
    relatedKps: ['M027']
  },
  {
    id: 'q080', kpId: 'M027', type: 'fill', difficulty: 2,
    stem: '请填空：\n空气中含量最多的元素是 ____；\n海洋中含量最多的元素是 ____；\n人体中含量最多的元素是 ____。',
    answer: '氮;氧;氧',
    altAnswers: ['N;O;O'],
    explanation: '元素之最：\n• 空气中含量最多的元素：**氮**（N）— 因为空气中 N₂ 占 78%\n• 海洋中含量最多的元素：**氧**（O）— 因为海水主要成分是 H₂O\n• 人体中含量最多的元素：**氧**（O）— 因为人体 70% 是水\n• 地壳中含量最多的元素：氧 O\n• 生物体内含量最多的元素：氧 O > 碳 > 氢 > 氮 > 钙\n\n💡 "氧"几乎是所有"含量最多"的答案，唯一例外是空气（氮）。',
    relatedKps: ['M027']
  },
  {
    id: 'q081', kpId: 'M027', type: 'choice', difficulty: 3,
    stem: '形成化合物种类最多的元素是？',
    options: ['A. 氢', 'B. 氧', 'C. 碳', 'D. 氮'],
    answer: 'C',
    explanation: '答案 **C 碳**。\n\n碳元素能形成几乎无限种化合物，主要原因：\n• 碳原子能与碳原子之间形成长链或环状结构\n• 碳原子最外层 4 个电子，可与多种元素形成共价键\n• 这是有机化学（碳化学）独立成学科的基础\n\n常见有机物（含碳化合物）：\n• 甲烷 CH₄、乙醇 C₂H₅OH、葡萄糖 C₆H₁₂O₆、淀粉、蛋白质、油脂等\n\n💡 例外：CO、CO₂、H₂CO₃、碳酸盐属于无机物（虽含碳但性质上属于无机化学）。',
    relatedKps: ['M027']
  },

  // ============================================================
  // M028 · 金属之最
  // ============================================================
  {
    id: 'q082', kpId: 'M028', type: 'choice', difficulty: 1,
    stem: '常温下为液态的金属是？',
    options: ['A. 铜', 'B. 金', 'C. 汞', 'D. 铁'],
    answer: 'C',
    explanation: '常温下为液态的金属：**汞（Hg）**\n• 熔点 −38.83℃，是熔点**最低**的金属\n• 常温下为银白色液体\n• 可用于温度计、血压计\n• 易挥发且**有毒**，泼洒后用硫粉撒上覆盖（生成 HgS 固体）\n\n💡 这是金属之最中的高频考点。',
    relatedKps: ['M028']
  },
  {
    id: 'q083', kpId: 'M028', type: 'fill', difficulty: 2,
    stem: '请填空：\n导电导热性最好的金属是 ____；\n硬度最高的金属是 ____；\n熔点最高的金属是 ____。',
    answer: '银;铬;钨',
    altAnswers: ['Ag;Cr;W'],
    explanation: '金属之最：\n• **导电导热性最好**：银（Ag）— 但因价格高，常用铜代替\n• **硬度最高**：铬（Cr）— 用于电镀、不锈钢添加成分\n• **熔点最高**：钨（W）— 用于灯丝（白炽灯）\n• **熔点最低 / 常温液态**：汞（Hg）\n• **延展性最好**：金（Au）\n\n💡 这些"之最"题考的就是死记硬背，记住"银导铬硬钨熔高，金延汞液铝最多"。',
    relatedKps: ['M028']
  },
  {
    id: 'q084', kpId: 'M028', type: 'choice', difficulty: 3,
    stem: '下列说法**错误**的是？',
    options: [
      'A. 地壳中含量最高的金属是铝',
      'B. 人体中含量最高的金属元素是钙',
      'C. 铜在常温下是红色固体',
      'D. 金的颜色是黄色，硬度最高'
    ],
    answer: 'D',
    explanation: '逐项判断：\n• A 正确：地壳金属第一是铝（Al > Fe > Ca）\n• B 正确：人体含量最高的金属元素是钙（Ca）— 主要存在于骨骼牙齿\n• C 正确：铜是红色固体（注意区别：金是黄色）\n• D 错误：金的颜色是黄色 ✓，但硬度高的是**铬**（Cr），金的硬度其实**很低**（黄金延展性好但硬度低，可被刻划）✗\n\n💡 易错点："黄金硬"是错觉——金质地很软，所以纯金做不了首饰，要做合金（如 18K 金）。',
    relatedKps: ['M028', 'M027']
  },

  // ============================================================
  // M029 · 燃烧现象记忆
  // ============================================================
  {
    id: 'q085', kpId: 'M029', type: 'choice', difficulty: 1,
    stem: '镁条在空气中燃烧时观察到的现象是？',
    options: [
      'A. 发出耀眼的白光，放热，生成白色固体',
      'B. 蓝紫色火焰，放热',
      'C. 火星四射，放热，生成黑色固体',
      'D. 淡蓝色火焰，烧杯内壁有水珠'
    ],
    answer: 'A',
    explanation: '镁条燃烧（必背）：**发出耀眼的白光，放热，生成白色固体（MgO）**\n\n方程式：2Mg + O₂ —点燃→ 2MgO\n\n• A 镁 ✓\n• B 硫在氧气中（蓝紫色火焰）\n• C 铁丝在氧气中（火星四射）\n• D 氢气在空气中（淡蓝色火焰）\n\n💡 应用：镁在战时用作信号弹和照明弹（强光），实验时**不要直视**，避免伤眼。',
    relatedKps: ['M029', 'M008']
  },
  {
    id: 'q086', kpId: 'M029', type: 'choice', difficulty: 2,
    stem: '红磷在空气中燃烧的现象是？',
    options: [
      'A. 火星四射',
      'B. 产生大量白雾',
      'C. 产生大量白烟',
      'D. 蓝紫色火焰'
    ],
    answer: 'C',
    explanation: '红磷燃烧（必背）：**产生大量白烟**\n\n方程式：4P + 5O₂ —点燃→ 2P₂O₅\n\n白烟实质：P₂O₅ **固体小颗粒**\n\n💡 易混"白烟" vs "白雾"：\n• **白烟** = 固体小颗粒（如 P₂O₅、NH₄Cl 升华）\n• **白雾** = 液体小液滴（如浓盐酸挥发出 HCl 气体遇水蒸气）\n\n应用：红磷燃烧用于**测定空气中氧气含量**——消耗氧气，生成固体不增加气体体积。',
    relatedKps: ['M029', 'M008']
  },
  {
    id: 'q087', kpId: 'M029', type: 'fill', difficulty: 3,
    stem: '木炭分别在空气和氧气中燃烧，现象有什么异同？\n相同点：____\n空气中现象：____\n氧气中现象：____',
    answer: '都生成能使澄清石灰水变浑浊的气体并放热;发出红光;发出白光',
    altAnswers: ['都生成使石灰水变浑浊的气体并放热;红光;白光'],
    explanation: '木炭燃烧对比：\n• 相同：都生成 **CO₂**（使澄清石灰水变浑浊），都**放热**\n• 空气中：**发出红光**\n• 氧气中：**发出白光**（更剧烈，氧气浓度高）\n\n方程式：C + O₂ —点燃→ CO₂\n\n💡 验证 CO₂：澄清石灰水变浑浊（Ca(OH)₂ + CO₂ = CaCO₃↓ + H₂O）。\n\n操作技巧："由上而下缓慢放入瓶中"——防止上层 O₂ 受热逸出影响实验。',
    relatedKps: ['M029', 'M008', 'M020']
  },

  // ============================================================
  // M030 · 沉淀颜色与气体特征
  // ============================================================
  {
    id: 'q088', kpId: 'M030', type: 'choice', difficulty: 1,
    stem: '下列沉淀中颜色为红褐色的是？',
    options: ['A. Cu(OH)₂', 'B. Fe(OH)₃', 'C. AgCl', 'D. BaSO₄'],
    answer: 'B',
    explanation: '沉淀颜色记忆（必背）：\n• **蓝色**：Cu(OH)₂\n• **红褐色**：Fe(OH)₃ ✓\n• **白色**：AgCl、BaSO₄、CaCO₃、Mg(OH)₂、Al(OH)₃ 等\n\n💡 加酸是否溶解：\n• AgCl、BaSO₄ — **不**溶于稀硝酸（用于检验 Cl⁻、SO₄²⁻）\n• CaCO₃、Mg(OH)₂ 等 — **溶**于稀盐酸/硫酸',
    relatedKps: ['M030', 'M021']
  },
  {
    id: 'q089', kpId: 'M030', type: 'fill', difficulty: 2,
    stem: '请按颜色分类，写出对应的沉淀化学式（每空一种即可）：\n蓝色沉淀：____\n红褐色沉淀：____\n不溶于稀硝酸的白色沉淀：____',
    answer: 'Cu(OH)2;Fe(OH)3;AgCl',
    altAnswers: ['Cu(OH)₂;Fe(OH)₃;BaSO₄', 'Cu(OH)2;Fe(OH)3;BaSO4'],
    explanation: '沉淀分类（必背）：\n• 蓝色：**Cu(OH)₂**（含 Cu²⁺ 的碱）\n• 红褐色：**Fe(OH)₃**（含 Fe³⁺ 的碱）\n• 白色不溶于稀硝酸：**AgCl 或 BaSO₄**（这两个是检验 Cl⁻、SO₄²⁻ 的依据）\n• 白色可溶于酸：CaCO₃、Mg(OH)₂、Al(OH)₃、Fe(OH)₂（注意 Fe(OH)₂ 实际是白色，会迅速被空气氧化变红褐色 Fe(OH)₃）\n\n💡 "白色沉淀的标识符号"：Mg(OH)₂↓、Al(OH)₃↓、CaCO₃↓ 等都是白色，但与酸反应能溶解，区别于 AgCl/BaSO₄。',
    relatedKps: ['M030']
  },
  {
    id: 'q090', kpId: 'M030', type: 'choice', difficulty: 3,
    stem: '将下列试剂分别滴入 NaOH 溶液中，不出现颜色变化的是？',
    options: [
      'A. CuSO₄ 溶液',
      'B. FeCl₃ 溶液',
      'C. NaCl 溶液',
      'D. 紫色石蕊溶液'
    ],
    answer: 'C',
    explanation: '逐项分析：\n• A NaOH + CuSO₄ → Cu(OH)₂↓（**蓝色沉淀**）✗\n• B NaOH + FeCl₃ → Fe(OH)₃↓（**红褐色沉淀**）✗\n• C NaOH + NaCl → 无反应（无沉淀气体水）→ **无现象** ✓\n• D 紫色石蕊在 NaOH 中变**蓝**（碱性使石蕊变蓝）✗\n\n答案 C。\n\n💡 这种"找不发生反应的"题很常考——本质是复分解反应不满足条件。',
    relatedKps: ['M030', 'T001']
  },

  // ============================================================
  // 必懂类（4 KP × 3 题样品保留）
  // ============================================================
  {
    id: 'q091', kpId: 'U001', type: 'choice', difficulty: 1,
    stem: '关于催化剂的说法，正确的是？',
    options: [
      'A. 催化剂能改变反应速率',
      'B. 催化剂能改变生成物的质量',
      'C. 催化剂在反应后会消失',
      'D. 一种催化剂只能催化一个反应'
    ],
    answer: 'A',
    explanation: '催化剂"一变两不变"：\n① 一变：改变化学反应速率（A ✓）\n② 不变 1：自身质量不变（C ✗）\n③ 不变 2：自身化学性质不变\n\nB 错：催化剂不改变产物质量。\nD 错：一种催化剂可催化多个反应。',
    relatedKps: ['U001']
  },
  {
    id: 'q092', kpId: 'U001', type: 'choice', difficulty: 2,
    stem: '过氧化氢分解制氧气时加入二氧化锰，下列说法正确的是？',
    options: [
      'A. 加 MnO₂ 后能生成更多氧气',
      'B. 加 MnO₂ 后反应速率加快',
      'C. MnO₂ 是该反应的反应物',
      'D. 反应后 MnO₂ 的质量减少'
    ],
    answer: 'B',
    explanation: '反应：2H₂O₂ —MnO₂→ 2H₂O + O₂↑，MnO₂ 是催化剂。\n\nA 错：催化剂不改变产物总量。\nC 错：是催化剂，不是反应物。\nD 错：催化剂自身质量不变。\nB 正确：加快速率。',
    relatedKps: ['U001', 'M011']
  },
  {
    id: 'q093', kpId: 'U001', type: 'fill', difficulty: 3,
    stem: '催化剂的"一变两不变"是指：催化剂改变 ____ ，自身的 ____ 和 ____ 在反应前后不变。',
    answer: '反应速率;质量;化学性质',
    altAnswers: ['化学反应速率;质量;化学性质', '反应速率;化学性质;质量'],
    explanation: '催化剂三句话：\n① 改变化学反应速率\n② 自身质量不变\n③ 自身化学性质不变\n\n注意"物理性质"可能改变，化学性质不变。',
    relatedKps: ['U001']
  },
  {
    id: 'q094', kpId: 'U002', type: 'choice', difficulty: 1,
    stem: '在反应 A + B = C + D 中，4g A 与 8g B 恰好完全反应生成 6g C，则生成 D 的质量是？',
    options: ['A. 2 g', 'B. 6 g', 'C. 10 g', 'D. 14 g'],
    answer: 'B',
    explanation: '质量守恒：4g + 8g = 6g + D → D = 6g。',
    relatedKps: ['U002']
  },
  {
    id: 'q095', kpId: 'U002', type: 'choice', difficulty: 2,
    stem: '关于质量守恒定律，下列说法正确的是？',
    options: [
      'A. 物理变化也遵循质量守恒定律',
      'B. 化学反应前后原子数目可能改变',
      'C. 化学反应前后元素种类不变',
      'D. 化学反应前后分子种类不变'
    ],
    answer: 'C',
    explanation: 'C 正确：元素种类不变。\nA 错：质量守恒定律只对化学变化。\nB 错：原子数目不变。\nD 错：分子种类一定变。\n\n口诀「六不变两变两可能」。',
    relatedKps: ['U002']
  },
  {
    id: 'q096', kpId: 'U002', type: 'choice', difficulty: 3,
    stem: '4g 氢气和 32g 氧气恰好完全反应，生成水的质量是？',
    options: ['A. 28 g', 'B. 32 g', 'C. 36 g', 'D. 64 g'],
    answer: 'C',
    explanation: '2H₂ + O₂ → 2H₂O，质量比 4:32:36。\n\n4g + 32g = 36g（守恒法）→ C。',
    relatedKps: ['U002', 'M011']
  },

  // ============================================================
  // 易混类（2 KP × 2 题样品保留）
  // ============================================================
  {
    id: 'q097', kpId: 'X001', type: 'choice', difficulty: 2,
    stem: '下列反应中，既属于化合反应又属于氧化反应的是？',
    options: [
      'A. 2H₂O₂ —MnO₂→ 2H₂O + O₂↑',
      'B. S + O₂ —点燃→ SO₂',
      'C. CO + CuO —△→ Cu + CO₂',
      'D. CaO + H₂O = Ca(OH)₂'
    ],
    answer: 'B',
    explanation: 'A：分解反应 ✗\nB：化合 + 氧化 ✓\nC：与 CuO 反应不是与 O₂，不是氧化反应\nD：化合反应但 H₂O 不是氧气，不是氧化反应。',
    relatedKps: ['X001', 'M008']
  },
  {
    id: 'q098', kpId: 'X001', type: 'choice', difficulty: 3,
    stem: '下列反应是氧化反应但不是化合反应的是？',
    options: [
      'A. 2Mg + O₂ —点燃→ 2MgO',
      'B. CH₄ + 2O₂ —点燃→ CO₂ + 2H₂O',
      'C. C + O₂ —点燃→ CO₂',
      'D. S + O₂ —点燃→ SO₂'
    ],
    answer: 'B',
    explanation: '甲烷燃烧：2 种变 2 种（不是多变一），不是化合反应；与 O₂ 反应是氧化反应。',
    relatedKps: ['X001', 'M009']
  },
  {
    id: 'q099', kpId: 'X002', type: 'choice', difficulty: 1,
    stem: '硫在氧气中燃烧时火焰的颜色是？',
    options: ['A. 淡蓝色', 'B. 蓝紫色', 'C. 耀眼白光', 'D. 黄色'],
    answer: 'B',
    explanation: '硫的燃烧：空气中淡蓝色，氧气中蓝紫色。',
    relatedKps: ['X002', 'M008']
  },
  {
    id: 'q100', kpId: 'X002', type: 'choice', difficulty: 2,
    stem: '在空气中点燃后能发出"耀眼白光"的物质是？',
    options: ['A. 铁丝', 'B. 硫粉', 'C. 镁条', 'D. 氢气'],
    answer: 'C',
    explanation: '镁——耀眼白光；铁——火星四射；硫——蓝紫/淡蓝；氢气——淡蓝色火焰。',
    relatedKps: ['X002', 'M029']
  },

  // ============================================================
  // TOP20（2 KP × 2 题样品保留）
  // ============================================================
  {
    id: 'q101', kpId: 'T001', type: 'choice', difficulty: 1,
    stem: '下列各组物质能发生复分解反应的是？',
    options: [
      'A. NaCl + KNO₃',
      'B. CuSO₄ + NaOH',
      'C. Cu + 稀 H₂SO₄',
      'D. Fe + CuSO₄'
    ],
    answer: 'B',
    explanation: 'A 全可溶无气沉水 ✗；B 生成 Cu(OH)₂ ↓ ✓；C 金属+酸是置换；D 金属+盐是置换。',
    relatedKps: ['T001', 'M021']
  },
  {
    id: 'q102', kpId: 'T001', type: 'choice', difficulty: 3,
    stem: '下列各组物质，能在溶液中大量共存的是？',
    options: [
      'A. NaOH 和 HCl',
      'B. CaCl₂ 和 Na₂CO₃',
      'C. AgNO₃ 和 NaCl',
      'D. KNO₃ 和 Na₂SO₄'
    ],
    answer: 'D',
    explanation: '"共存"=互相不反应。A 中和；B 生成 CaCO₃↓；C 生成 AgCl↓；D 全可溶无沉气水，共存 ✓。',
    relatedKps: ['T001', 'M022']
  },
  {
    id: 'q103', kpId: 'T002', type: 'choice', difficulty: 2,
    stem: '配制 50g 6% 的 NaCl 溶液时，下列操作会使溶质质量分数偏小的是？',
    options: [
      'A. 量取水时俯视读数',
      'B. 所用 NaCl 中含不溶性杂质',
      'C. 转移时部分水洒出',
      'D. 砝码生锈'
    ],
    answer: 'B',
    explanation: 'A 水少 → 偏大；B 实际 NaCl 少 → 偏小 ✓；C 水少 → 偏大；D 砝码偏重 → NaCl 实际偏多 → 偏大。',
    relatedKps: ['T002']
  },
  {
    id: 'q104', kpId: 'T002', type: 'fill', difficulty: 1,
    stem: '配制 100g 5% 的 NaCl 溶液，需要 NaCl ____ g，水 ____ mL。',
    answer: '5;95',
    altAnswers: ['5g;95mL', '5;95mL', '5 g;95 mL'],
    explanation: 'NaCl = 100×5% = 5g；水 = 100−5 = 95g = 95mL。',
    relatedKps: ['T002']
  },

  // ============================================================
  // 第二批 · 必懂类 84 题（U003-U030）
  // ============================================================

  // U003 · 复分解反应发生条件
  {
    id: 'q105', kpId: 'U003', type: 'choice', difficulty: 1,
    stem: '复分解反应发生的条件是？',
    options: [
      'A. 反应物中必须有酸',
      'B. 生成物中有气体、沉淀或水之一',
      'C. 反应物必须都可溶',
      'D. 反应必须放热'
    ],
    answer: 'B',
    explanation: '复分解反应通用条件：**生成物中有气体↑、沉淀↓或水**（三选一）。\n\n• A 错：盐+碱、盐+盐都不需要酸\n• C 错：盐+酸不要求盐都可溶（如 CaCO₃ 不溶也能与 HCl 反应）\n• D 错：与放热无关\n\n💡 这是判断复分解反应能否发生的核心标准。',
    relatedKps: ['U003', 'T001']
  },
  {
    id: 'q106', kpId: 'U003', type: 'choice', difficulty: 2,
    stem: '下列各组物质混合后，不能发生反应的是？',
    options: [
      'A. NaOH 溶液 + CuSO₄ 溶液',
      'B. Ba(OH)₂ 溶液 + Na₂SO₄ 溶液',
      'C. KCl 溶液 + Na₂CO₃ 溶液',
      'D. AgNO₃ 溶液 + 稀盐酸'
    ],
    answer: 'C',
    explanation: '逐项判断生成物是否有气/沉/水：\n• A → Cu(OH)₂↓（蓝色沉淀）✓ 反应\n• B → BaSO₄↓（白色沉淀）✓ 反应\n• **C → 交换得 NaCl + K₂CO₃，全部可溶，无气/沉/水 → 不反应** ✓ 答案\n• D → AgCl↓（白色沉淀）✓ 反应\n\n💡 题目问"不能发生反应"，所以选 **C**。',
    relatedKps: ['U003']
  },
  {
    id: 'q107', kpId: 'U003', type: 'choice', difficulty: 3,
    stem: '下列各组离子能在同一溶液中大量共存的是？',
    options: [
      'A. H⁺、Na⁺、CO₃²⁻',
      'B. Ag⁺、K⁺、Cl⁻',
      'C. Na⁺、K⁺、NO₃⁻',
      'D. Ba²⁺、Na⁺、SO₄²⁻'
    ],
    answer: 'C',
    explanation: '离子共存 = 离子之间不反应。\n\n• A H⁺ + CO₃²⁻ → H₂O + CO₂↑（反应） ✗\n• B Ag⁺ + Cl⁻ → AgCl↓ ✗\n• C 三种离子互不反应 ✓\n• D Ba²⁺ + SO₄²⁻ → BaSO₄↓ ✗\n\n💡 常见离子组合不能共存：H⁺+CO₃²⁻、H⁺+OH⁻、Ag⁺+Cl⁻、Ba²⁺+SO₄²⁻、Cu²⁺+OH⁻、Fe³⁺+OH⁻ 等。',
    relatedKps: ['U003', 'T001']
  },

  // U004 · 金属活动性顺序应用
  {
    id: 'q108', kpId: 'U004', type: 'choice', difficulty: 1,
    stem: '为验证锌、铜、银三种金属的活动性顺序，下列实验方案不可行的是？',
    options: [
      'A. 将三种金属分别放入稀盐酸中',
      'B. 将 Zn、Ag 分别放入 CuSO₄ 溶液中',
      'C. 将 Cu 放入 ZnSO₄ 溶液中',
      'D. 将 Cu 放入 AgNO₃ 溶液中，将 Zn 放入 CuSO₄ 溶液中'
    ],
    answer: 'C',
    explanation: '验证三种金属活动性的方法（金、盐、金 或 盐、金、盐）：\n\n• A 可行：Zn 反应 / Cu、Ag 不反应 → Zn>H>Cu、Ag，但 Cu/Ag 顺序未分\n  实际上更细看：Zn 反应说明 Zn>H；Cu/Ag 都不反应说明 Cu、Ag 在 H 后；与酸的反应只能验证 Zn 最强，不能区分 Cu、Ag\n• B 可行：Zn 析出 Cu（Zn>Cu），Ag 不反应（Ag<Cu） → Zn>Cu>Ag ✓\n• C **不可行**：Cu 在 Zn 后，**不反应**，无法验证任何顺序 ✗\n• D 可行：Cu 析出 Ag（Cu>Ag），Zn 析出 Cu（Zn>Cu）→ Zn>Cu>Ag ✓\n\n💡 验证 3 种金属活动性的两种方法：\n① **金 + 盐 + 金**（中间盐两边金属）\n② **盐 + 金 + 盐**（中间金属两边盐）',
    relatedKps: ['U004', 'M002']
  },
  {
    id: 'q109', kpId: 'U004', type: 'choice', difficulty: 2,
    stem: '下列说法正确的是？',
    options: [
      'A. 金属活动性顺序中位置越靠前，金属与酸反应越剧烈',
      'B. 钠（Na）能从硫酸铜溶液中置换出铜',
      'C. 所有金属都能与盐酸反应放出氢气',
      'D. 铜不能与任何盐溶液反应'
    ],
    answer: 'A',
    explanation: '• A 正确：活动性越强反应越剧烈 ✓\n• B 错：**K、Ca、Na 太活泼，加入盐溶液会先与水反应**，不能置换金属。Na + CuSO₄ 溶液 → 实际是 Na 先与水反应生成 NaOH 和 H₂↑，NaOH 再与 CuSO₄ 反应生成 Cu(OH)₂↓\n• C 错：H 之后的金属（Cu/Ag/Au 等）不与盐酸反应\n• D 错：Cu 能与 AgNO₃ 反应（Cu+2AgNO₃→Cu(NO₃)₂+2Ag）\n\n💡 重要例外：金属+盐溶液要求金属在前但 **K Ca Na 除外**（活泼性太强）。',
    relatedKps: ['U004', 'M002']
  },
  {
    id: 'q110', kpId: 'U004', type: 'choice', difficulty: 3,
    stem: '将一定量的铁粉加入到 AgNO₃ 和 Zn(NO₃)₂ 的混合溶液中，充分反应后过滤，下列分析正确的是？',
    options: [
      'A. 滤液中一定含有 Fe(NO₃)₂ 和 Zn(NO₃)₂',
      'B. 滤渣中一定含有 Ag 和 Zn',
      'C. 滤渣中一定含有 Ag 和 Fe',
      'D. 滤液中一定不含 AgNO₃'
    ],
    answer: 'A',
    explanation: '活动性：Zn > Fe > Ag\n所以 Fe 只能置换 Ag，**不能置换 Zn**。\n\n反应：Fe + 2AgNO₃ → Fe(NO₃)₂ + 2Ag\n\n分析：\n• A ✓：Zn(NO₃)₂ 不参与反应，仍在溶液中；Fe 置换 Ag 一定生成 Fe(NO₃)₂\n• B ✗：滤渣中绝不会有 Zn（Fe 不能置换 Zn）\n• C ✗：Fe 是否剩余取决于用量，不一定有\n• D ✗：Fe 不足时 AgNO₃ 可能剩余\n\n答案 A。',
    relatedKps: ['U004', 'M014']
  },

  // U005 · 溶解度曲线读图
  {
    id: 'q111', kpId: 'U005', type: 'choice', difficulty: 1,
    stem: '关于溶解度曲线，下列说法正确的是？',
    options: [
      'A. 曲线上的点表示不饱和溶液',
      'B. 曲线下方的点表示饱和溶液',
      'C. 两曲线的交点表示该温度下两种物质溶解度相等',
      'D. 曲线上方的点表示稀溶液'
    ],
    answer: 'C',
    explanation: '溶解度曲线点的意义：\n• **曲线上**：恰好饱和\n• **曲线下方**：不饱和（还能继续溶解）\n• **曲线上方**：饱和+有固体析出\n• **两曲线交点**：该温度下两物质的溶解度相等 ✓\n\nA、B、D 错误。\n答案 C。',
    relatedKps: ['U005']
  },
  {
    id: 'q112', kpId: 'U005', type: 'choice', difficulty: 2,
    stem: 't₁℃ 时 KNO₃ 的饱和溶液升温到 t₂℃（t₂ > t₁），KNO₃ 溶解度随温度升高而增大，下列说法正确的是？',
    options: [
      'A. 溶液变为不饱和溶液',
      'B. 溶质质量分数变大',
      'C. 析出晶体',
      'D. 溶液变为另一种物质的饱和溶液'
    ],
    answer: 'A',
    explanation: 'KNO₃ 溶解度随温度↑而↑：\n• 升温后该温度的"最大溶解量"变大 → 原本饱和的现在变**不饱和** ✓\n• 没有溶质溶剂的增减，质量分数**不变**（B 错）\n• 升温只会让更多溶质溶解（如果有固体），不会析出（C 错）\n• 仍是 KNO₃ 溶液（D 错）\n\n答案 A。\n\n💡 反例：Ca(OH)₂ 溶解度随温度↑而**↓**——升温反而析出沉淀。',
    relatedKps: ['U005']
  },
  {
    id: 'q113', kpId: 'U005', type: 'choice', difficulty: 3,
    stem: 'NaCl 中混有少量 KNO₃，提纯 NaCl 应采用的方法是？（KNO₃ 溶解度受温度影响大，NaCl 溶解度受温度影响小）',
    options: [
      'A. 蒸发结晶',
      'B. 降温结晶',
      'C. 过滤',
      'D. 蒸馏'
    ],
    answer: 'A',
    explanation: '结晶方法选择：\n• **蒸发结晶**：适用于溶解度受温度影响**小**的物质\n• **降温结晶**（冷却热饱和溶液）：适用于溶解度随温度升高显著升高的物质\n\n本题主要物质是 NaCl（受温度影响小）→ **蒸发结晶** ✓\n\n反例：KNO₃ 中含 NaCl → 用降温结晶（KNO₃ 受温度影响大）。\n\n答案 A。',
    relatedKps: ['U005']
  },

  // U006 · 浓硫酸
  {
    id: 'q114', kpId: 'U006', type: 'choice', difficulty: 1,
    stem: '稀释浓硫酸的正确操作是？',
    options: [
      'A. 把水沿器壁慢慢倒入浓硫酸中',
      'B. 把浓硫酸沿器壁慢慢倒入水中并不断搅拌',
      'C. 把水和浓硫酸快速混合',
      'D. 先加水后加硫酸'
    ],
    answer: 'B',
    explanation: '稀释浓硫酸口诀："**酸入水，沿器壁，慢倒搅**"。\n\n• B 正确 ✓\n• A 错：水的密度比浓硫酸**小**，水会浮在浓硫酸表面；浓硫酸溶于水会放出大量热，可能使水沸腾飞溅伤人\n• C 错：必须慢慢倒\n• D 错：只能酸倒入水，不能反\n\n💡 牢记："**酸入水，没问题；水入酸，要爆炸**"。',
    relatedKps: ['U006']
  },
  {
    id: 'q115', kpId: 'U006', type: 'choice', difficulty: 2,
    stem: '关于浓硫酸的下列说法**错误**的是？',
    options: [
      'A. 浓硫酸具有吸水性，常用作干燥剂',
      'B. 浓硫酸具有脱水性，会使纸张、衣物变黑',
      'C. 浓硫酸可以干燥任何气体',
      'D. 浓硫酸沾到皮肤上应先用大量水冲洗'
    ],
    answer: 'C',
    explanation: '• A 正确：浓硫酸吸水性 → 实验室常用干燥剂\n• B 正确：脱水性 → 与纸张/衣物中的氢氧元素以 2:1 形式脱去（生成水），剩下黑色碳\n• C **错误**：浓硫酸**不能干燥碱性气体**（如 NH₃）和某些**还原性气体**（如 H₂S）\n• D 正确：先大量水冲洗，再涂 3%-5% 的 NaHCO₃ 溶液\n\n答案 C。\n\n💡 浓硫酸三性：**脱水性、吸水性、强腐蚀性**。',
    relatedKps: ['U006']
  },
  {
    id: 'q116', kpId: 'U006', type: 'choice', difficulty: 3,
    stem: '下列气体可用浓硫酸干燥的是？',
    options: ['A. NH₃', 'B. H₂', 'C. H₂S', 'D. HCl 中混有的 NH₃'],
    answer: 'B',
    explanation: '浓硫酸干燥规则：\n• 不能干燥**碱性气体**（NH₃）—— 会反应\n• 不能干燥**强还原性气体**（H₂S）—— 会反应\n• 可以干燥：**O₂、H₂、CO、CO₂、HCl、SO₂、N₂** 等\n\n• A NH₃ 碱性 ✗\n• B H₂ ✓\n• C H₂S 强还原性 ✗\n• D 含 NH₃ → 部分会反应 ✗\n\n答案 B。',
    relatedKps: ['U006']
  },

  // U007 · pH
  {
    id: 'q117', kpId: 'U007', type: 'choice', difficulty: 1,
    stem: '某溶液的 pH = 3，该溶液一定显？',
    options: ['A. 酸性', 'B. 中性', 'C. 碱性', 'D. 不能确定'],
    answer: 'A',
    explanation: 'pH 与酸碱性：\n• **pH < 7**：酸性（pH 越小酸性越强）\n• **pH = 7**：中性\n• **pH > 7**：碱性（pH 越大碱性越强）\n\npH = 3 → **酸性** ✓ 答案 A。\n\n💡 常见物质 pH：\n• 胃酸 ≈ 0.9-1.5（强酸性）\n• 雨水 ≈ 5.6（弱酸性，因为含 CO₂）\n• 纯水 = 7\n• 肥皂水 ≈ 9-10（弱碱性）',
    relatedKps: ['U007']
  },
  {
    id: 'q118', kpId: 'U007', type: 'choice', difficulty: 2,
    stem: '用 pH 试纸测量某酸性溶液的 pH 时，先用蒸馏水将试纸润湿，则测得的 pH 值与实际 pH 值相比？',
    options: ['A. 偏大', 'B. 偏小', 'C. 不变', 'D. 无法确定'],
    answer: 'A',
    explanation: 'pH 试纸**不能润湿**！原因：\n• 润湿 = 加水稀释 → 酸性溶液被稀释 → pH 升高（向 7 靠近）\n• 所以测**酸性**溶液时，pH 测得**偏大** ✓\n\n规律：\n• 酸性溶液润湿：pH 偏大（向 7 靠）\n• 碱性溶液润湿：pH 偏小（向 7 靠）\n• 中性溶液润湿：pH 不变\n\n答案 A。',
    relatedKps: ['U007']
  },
  {
    id: 'q119', kpId: 'U007', type: 'choice', difficulty: 3,
    stem: '正常雨水的 pH 约为 5.6（因 CO₂ 与水反应），下列哪种情况会形成酸雨？',
    options: [
      'A. 雨水的 pH = 6',
      'B. 雨水的 pH = 5.6',
      'C. 雨水的 pH = 5.0',
      'D. 雨水的 pH = 7'
    ],
    answer: 'C',
    explanation: '酸雨的定义：**pH < 5.6 的雨水**。\n\n• A pH=6：弱酸，不算酸雨\n• B pH=5.6：正常雨水（含 CO₂）\n• C **pH=5.0 < 5.6**：酸雨 ✓\n• D pH=7：中性\n\n💡 酸雨的成因：空气中的 SO₂、NO₂ 等溶于水形成 H₂SO₃/H₂SO₄/HNO₃。\n\n注意："正常雨水 pH 5.6 而不是 7" 是因为空气中的 CO₂ 与水反应生成 H₂CO₃。',
    relatedKps: ['U007']
  },

  // U008 · 酸的通性
  {
    id: 'q120', kpId: 'U008', type: 'choice', difficulty: 1,
    stem: '盐酸具有酸的通性，是因为盐酸溶液中含有？',
    options: ['A. 氯化氢分子', 'B. H⁺ 和 Cl⁻', 'C. H⁺', 'D. Cl⁻'],
    answer: 'C',
    explanation: '酸的共性来源：**所有酸在水溶液中都能电离出 H⁺**——所以酸具有相似的化学性质。\n\n• A 错：分子层面看，但化学性质由离子决定\n• B 错：Cl⁻ 不是酸性的来源（NaCl 也含 Cl⁻ 但不是酸）\n• C ✓：酸的本质特征是 H⁺\n• D 错：Cl⁻ 只决定盐酸的特性\n\n💡 类比：碱的共性来自 OH⁻；盐的共性来自金属离子（或铵根）。',
    relatedKps: ['U008']
  },
  {
    id: 'q121', kpId: 'U008', type: 'choice', difficulty: 2,
    stem: '下列物质中，与稀盐酸反应能产生气体的是？',
    options: ['A. CuO', 'B. NaCl', 'C. CaCO₃', 'D. NaOH'],
    answer: 'C',
    explanation: '与稀盐酸反应产生气体：\n• A CuO + 2HCl = CuCl₂ + H₂O（无气体）\n• B NaCl + HCl 不反应（同种离子）\n• C **CaCO₃ + 2HCl = CaCl₂ + H₂O + CO₂↑** ✓\n• D NaOH + HCl = NaCl + H₂O（中和反应，无气体）\n\n💡 与酸反应产生气体的两类物质：\n① 活泼金属（产 H₂）\n② **碳酸盐**（如 CaCO₃、Na₂CO₃、NaHCO₃）（产 CO₂）',
    relatedKps: ['U008']
  },
  {
    id: 'q122', kpId: 'U008', type: 'choice', difficulty: 3,
    stem: '下列各组物质中，全部能与稀硫酸发生反应的是？',
    options: [
      'A. Cu、CuO、NaOH',
      'B. Zn、Fe₂O₃、Ca(OH)₂',
      'C. Au、Na₂CO₃、NaCl',
      'D. Ag、KOH、BaCl₂'
    ],
    answer: 'B',
    explanation: '稀硫酸的 5 类反应：①金属（H 前）②金属氧化物 ③碱 ④盐（生成沉淀/气体/水）⑤指示剂\n\n• A Cu 在 H 后**不反应** ✗\n• **B Zn（金属）+ Fe₂O₃（氧化物）+ Ca(OH)₂（碱），都能反应** ✓\n• C Au 不反应 ✗\n• D Ag 不反应；KOH 反应；BaCl₂+H₂SO₄=BaSO₄↓+HCl 反应；但 Ag 一项就排除\n\n答案 B。',
    relatedKps: ['U008', 'M013', 'M017', 'M018']
  },

  // U009 · 碱的通性
  {
    id: 'q123', kpId: 'U009', type: 'choice', difficulty: 1,
    stem: '碱的水溶液能使紫色石蕊溶液变？无色酚酞溶液变？',
    options: ['A. 红色；红色', 'B. 蓝色；红色', 'C. 蓝色；不变色', 'D. 红色；蓝色'],
    answer: 'B',
    explanation: '指示剂变色规律：\n\n| 溶液 | 紫色石蕊 | 无色酚酞 |\n|------|---------|---------|\n| 酸性 | 变**红** | 不变色 |\n| 中性 | 不变色 | 不变色 |\n| 碱性 | 变**蓝** | 变**红** |\n\n碱性 → 石蕊变蓝 + 酚酞变红 → 答案 **B**。\n\n💡 口诀："酸里红蕊不见酚（无色），碱里蓝蕊红酚酞"。',
    relatedKps: ['U009']
  },
  {
    id: 'q124', kpId: 'U009', type: 'choice', difficulty: 2,
    stem: '将 CO₂ 通入 NaOH 溶液中，无明显现象。下列说法正确的是？',
    options: [
      'A. CO₂ 与 NaOH 没有发生反应',
      'B. 反应方程式：NaOH + CO₂ = NaHCO₃',
      'C. 反应方程式：2NaOH + CO₂ = Na₂CO₃ + H₂O',
      'D. 反应不放热'
    ],
    answer: 'C',
    explanation: '碱与非金属氧化物反应（必背）：**2NaOH + CO₂ = Na₂CO₃ + H₂O**\n\n• A 错：虽无现象但发生了反应\n• B 错：方程式错误，正确的是 C\n• C ✓\n• D 错：放热\n\n💡 这是 NaOH 在空气中变质的原因——敞口放置吸收空气中的 CO₂ → Na₂CO₃。\n\n验证 NaOH 是否变质：滴入稀盐酸，**有气泡**说明已变质。',
    relatedKps: ['U009', 'M020']
  },
  {
    id: 'q125', kpId: 'U009', type: 'choice', difficulty: 3,
    stem: '下列各组物质能与 Ca(OH)₂ 溶液发生反应的是？',
    options: [
      'A. CO₂、HCl、Na₂CO₃',
      'B. NaCl、KNO₃、CO₂',
      'C. CO、HCl、CuSO₄',
      'D. SO₂、NaCl、KOH'
    ],
    answer: 'A',
    explanation: 'Ca(OH)₂ 能与下列物质反应：\n• **酸**：HCl、H₂SO₄ 等（中和）\n• **非金属氧化物**：CO₂（变浑浊检验）、SO₂\n• **盐**（要求都可溶且生成沉淀/气体/水）：Na₂CO₃（生成 CaCO₃↓）、CuSO₄（生成 Cu(OH)₂↓ 蓝色沉淀）\n\n• **A CO₂、HCl、Na₂CO₃ 全部能反应** ✓\n• B NaCl/KNO₃ 不反应\n• C CO 不与碱反应（**CO 是不成盐氧化物**）\n• D NaCl 不反应；KOH+Ca(OH)₂ 都是碱也不反应\n\n答案 A。',
    relatedKps: ['U009']
  },

  // U010 · 中和反应
  {
    id: 'q126', kpId: 'U010', type: 'choice', difficulty: 1,
    stem: '中和反应的实质是？',
    options: [
      'A. 酸与碱混合',
      'B. H⁺ + OH⁻ = H₂O',
      'C. 酸+碱=盐+水',
      'D. 溶液变成中性'
    ],
    answer: 'B',
    explanation: '中和反应：酸 + 碱 → 盐 + 水（**宏观**层面）\n\n微观实质：**H⁺ + OH⁻ = H₂O** ✓\n\n• A 错：必须发生反应才算中和\n• C 错：是宏观规律，不是"实质"\n• D 错：恰好中和才中性，过量则非中性\n\n💡 中和反应**一定**生成盐和水，但生成盐和水的反应**不一定**是中和反应（如 CaO + 2HCl = CaCl₂ + H₂O 不是中和，因为 CaO 不是碱）。',
    relatedKps: ['U010', 'M018']
  },
  {
    id: 'q127', kpId: 'U010', type: 'choice', difficulty: 2,
    stem: '下列反应**不属于**中和反应的是？',
    options: [
      'A. NaOH + HCl = NaCl + H₂O',
      'B. Cu(OH)₂ + H₂SO₄ = CuSO₄ + 2H₂O',
      'C. CaO + 2HCl = CaCl₂ + H₂O',
      'D. Ba(OH)₂ + H₂SO₄ = BaSO₄↓ + 2H₂O'
    ],
    answer: 'C',
    explanation: '中和反应**严格定义**：**酸**与**碱**反应生成盐和水。\n\n• A NaOH（碱）+ HCl（酸）✓\n• B Cu(OH)₂（碱）+ H₂SO₄（酸）✓\n• **C CaO（金属氧化物，不是碱）+ HCl（酸）→ 不是中和反应** ✗\n• D Ba(OH)₂（碱）+ H₂SO₄（酸）✓\n\n💡 易错点：CaO 不是碱！它是金属氧化物。CaO+H₂O=Ca(OH)₂ 之后，Ca(OH)₂ 才是碱。',
    relatedKps: ['U010']
  },
  {
    id: 'q128', kpId: 'U010', type: 'choice', difficulty: 3,
    stem: '向稀盐酸中逐滴加入 NaOH 溶液，下列说法正确的是？',
    options: [
      'A. pH 一直在增大',
      'B. 反应过程中溶液温度不变',
      'C. 加入酚酞，溶液立即变红',
      'D. 反应完成后，溶液一定显中性'
    ],
    answer: 'A',
    explanation: '逐滴加 NaOH 到 HCl 中：\n\n• A ✓：起始 pH<7（酸），中和过程 pH 逐渐升高，最终 pH>7（碱过量）\n• B ✗：中和反应**放热**，温度升高\n• C ✗：先是酸性（酚酞无色），中和后碱性才变红——不是立即变红\n• D ✗："反应完成"含义模糊：恰好中和才中性；NaOH 过量则碱性\n\n💡 中考曲线题常考：起点 pH<7，曲线上升，经过 pH=7（恰好中和点），然后上升到 pH>7。',
    relatedKps: ['U010', 'U007']
  },

  // U011 · 燃烧三条件
  {
    id: 'q129', kpId: 'U011', type: 'choice', difficulty: 1,
    stem: '燃烧需要同时具备的三个条件是？',
    options: [
      'A. 可燃物、氧气、达到着火点',
      'B. 可燃物、氮气、点火',
      'C. 助燃物、空气、火源',
      'D. 燃料、温度、空气'
    ],
    answer: 'A',
    explanation: '燃烧三条件（**缺一不可**）：\n① **可燃物**\n② **氧气**（或空气）\n③ **温度达到可燃物的着火点**\n\n灭火三原理（**破坏任一条件**即可）：\n① 清除可燃物\n② 隔绝氧气\n③ 降温到着火点以下',
    relatedKps: ['U011']
  },
  {
    id: 'q130', kpId: 'U011', type: 'choice', difficulty: 2,
    stem: '在铜片上分别放白磷和红磷，并将一块白磷放入热水中。如图实验中下列现象**不会**出现的是？',
    options: [
      'A. 铜片上的白磷燃烧',
      'B. 铜片上的红磷燃烧',
      'C. 水中的白磷不燃烧',
      'D. 通入氧气后水中白磷燃烧'
    ],
    answer: 'B',
    explanation: '经典燃烧条件探究实验（白磷红磷对照）：\n\n| 位置 | 物质 | 条件 | 现象 |\n|------|------|------|------|\n| 铜片上 | **白磷** | 与氧气接触 + 温度高于 40℃（白磷着火点） | **燃烧** |\n| 铜片上 | 红磷 | 与氧气接触 但 温度低于红磷着火点（240℃） | 不燃烧 |\n| 水中 | 白磷 | 没有氧气接触 | 不燃烧 |\n| 水中 | 白磷 + 通氧气 | 接触氧气 + 温度够 | 燃烧 |\n\n• A 会出现 ✓\n• **B 不会出现** ✗（红磷着火点高，温度不够）\n• C 会 ✓\n• D 会 ✓\n\n答案 B。\n\n💡 这个实验同时证明燃烧三条件：温度（白磷vs红磷）、氧气（铜片上vs水中白磷）。',
    relatedKps: ['U011']
  },
  {
    id: 'q131', kpId: 'U011', type: 'choice', difficulty: 3,
    stem: '下列灭火方法及其原理对应**错误**的是？',
    options: [
      'A. 用水浇灭木材火 —— 降温到着火点以下',
      'B. 用锅盖盖灭炒菜油锅起火 —— 隔绝氧气',
      'C. 森林大火砍伐隔离带 —— 清除可燃物',
      'D. 用水浇灭电器火灾 —— 降温到着火点以下'
    ],
    answer: 'D',
    explanation: '• A 正确：水降温 ✓\n• B 正确：盖子隔绝氧气 ✓\n• C 正确：移除可燃物 ✓\n• **D 错误**：电器火灾**不能用水**！原因：水导电，会触电；先**切断电源**再用干粉/CO₂ 灭火 ✗\n\n💡 几种特殊场景灭火：\n• 油锅着火 → 盖锅盖（不能用水，水会导致油溅）\n• 电器着火 → 切电源 + 干粉/CO₂\n• 实验室酒精灯倒了 → 湿抹布盖灭\n• 衣服着火 → 就地打滚（隔绝氧气）',
    relatedKps: ['U011']
  },

  // U012 · 铁生锈
  {
    id: 'q132', kpId: 'U012', type: 'choice', difficulty: 1,
    stem: '铁生锈是铁与下列哪两种物质共同作用的结果？',
    options: ['A. 氧气和氢气', 'B. 氧气和水', 'C. 氮气和水', 'D. 二氧化碳和水'],
    answer: 'B',
    explanation: '铁生锈条件：**铁同时与氧气、水接触**——缺一不可。\n\n铁锈主要成分：Fe₂O₃·xH₂O（**红褐色**，疏松多孔，不能阻止内部铁继续生锈）\n\n💡 对比铜生锈（生铜绿 Cu₂(OH)₂CO₃）：与**氧气、水、二氧化碳**共同作用——多了 CO₂。',
    relatedKps: ['U012']
  },
  {
    id: 'q133', kpId: 'U012', type: 'choice', difficulty: 2,
    stem: '铁钉生锈条件探究实验：A 试管（铁钉+水+空气），B 试管（铁钉+刚煮沸的水+植物油密封），C 试管（干燥的铁钉+空气）。一段时间后哪个试管中的铁钉锈蚀？',
    options: ['A. 只有 A', 'B. 只有 B', 'C. A 和 B', 'D. A 和 C'],
    answer: 'A',
    explanation: '三个试管的条件：\n• **A**：铁钉 + 水 + 空气 → **同时有氧气和水** → 生锈 ✓\n• B：铁钉 + 煮沸水（除尽溶解氧）+ 植物油（隔绝空气）→ **只有水，没氧气** → 不生锈\n• C：干燥铁钉 + 空气（含氧）→ **只有氧气，没水** → 不生锈\n\n答案 A。\n\n💡 这是经典对照实验：\n• A vs C → 证明需要**水**\n• A vs B → 证明需要**氧气**\n• 植物油作用：**隔绝氧气**（防止氧气溶于水）\n• 煮沸水作用：除尽水中溶解的氧',
    relatedKps: ['U012']
  },
  {
    id: 'q134', kpId: 'U012', type: 'choice', difficulty: 3,
    stem: '下列防止铁制品生锈的方法**不可行**的是？',
    options: [
      'A. 在铁制品表面涂一层油漆',
      'B. 在铁制品表面镀一层锌',
      'C. 把铁制品长时间浸泡在水中',
      'D. 把铁制品制成不锈钢'
    ],
    answer: 'C',
    explanation: '防锈三大方法：\n① **保持表面干燥洁净**（改善腐蚀环境）\n② **形成保护层**（刷漆/涂油/镀金属/烤蓝/搪瓷）\n③ **改变金属本身结构**（制成合金，如不锈钢）\n\n• A 涂漆 ✓\n• B 镀锌 ✓（牺牲阳极保护）\n• **C 长时间浸水 → 接触水 + 溶解氧 → 加速生锈** ✗\n• D 不锈钢 ✓\n\n答案 C。',
    relatedKps: ['U012']
  },

  // U013 · CO2 制取
  {
    id: 'q135', kpId: 'U013', type: 'fill', difficulty: 1,
    stem: '实验室制取 CO₂ 常用 ____ 与 ____ 反应，化学方程式：____',
    answer: '大理石（或石灰石）;稀盐酸;CaCO3+2HCl=CaCl2+H2O+CO2↑',
    altAnswers: ['石灰石;稀盐酸;CaCO3+2HCl=CaCl2+H2O+CO2↑', '大理石;稀盐酸;CaCO₃+2HCl=CaCl₂+H₂O+CO₂↑'],
    explanation: '实验室制 CO₂：\n• **药品**：大理石或石灰石（CaCO₃）+ **稀盐酸**\n• **方程式**：CaCO₃ + 2HCl = CaCl₂ + H₂O + CO₂↑\n• **装置**：固液常温型（B 装置或 C 装置）\n• **收集**：向上排空气法（CO₂ 密度大于空气，能溶于水）',
    relatedKps: ['U013', 'M019']
  },
  {
    id: 'q136', kpId: 'U013', type: 'choice', difficulty: 2,
    stem: '实验室制取 CO₂ 时，不能用稀硫酸代替稀盐酸的原因是？',
    options: [
      'A. 稀硫酸太浓',
      'B. 稀硫酸与 CaCO₃ 反应生成微溶的 CaSO₄ 覆盖在 CaCO₃ 表面，阻止反应继续',
      'C. 稀硫酸不能与 CaCO₃ 反应',
      'D. 稀硫酸生成的 CO₂ 不纯'
    ],
    answer: 'B',
    explanation: '不用稀硫酸的原因：\n• CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂↑\n• 但 **CaSO₄ 微溶**，会覆盖在 CaCO₃ 表面**阻止反应继续** ✓\n\n• A 错：稀硫酸是稀的\n• C 错：能反应，但反应不能持续\n• D 错：浓盐酸才会使 CO₂ 不纯（HCl 挥发）\n\n💡 同样，**也不能用浓盐酸**——浓盐酸有挥发性，HCl 气体混入 CO₂ 中。',
    relatedKps: ['U013']
  },
  {
    id: 'q137', kpId: 'U013', type: 'fill', difficulty: 3,
    stem: '检验集气瓶中是否收集满 CO₂ 的方法：____\n检验某气体是 CO₂ 的方法：____',
    answer: '将燃着的木条放在瓶口，木条熄灭说明已满;将气体通入澄清石灰水，石灰水变浑浊',
    altAnswers: ['燃着木条放瓶口熄灭则满;通入澄清石灰水变浑浊'],
    explanation: '**验满**（瓶口检验，看是否收集满）：\n将**燃着的木条**放在瓶口，**木条熄灭**说明已满（CO₂ 不支持燃烧）\n\n**检验**（鉴定身份，确认是 CO₂）：\n将气体通入**澄清石灰水**，**变浑浊**说明是 CO₂\n方程式：Ca(OH)₂ + CO₂ = CaCO₃↓ + H₂O\n\n💡 验满 vs 检验**不一样**——验满用瓶口外的方法（避免污染），检验用瓶内通入。',
    relatedKps: ['U013', 'M020']
  },

  // U014 · O2 制取
  {
    id: 'q138', kpId: 'U014', type: 'choice', difficulty: 1,
    stem: '实验室制取 O₂ 的三种方法的原理（化学方程式）正确的是？',
    options: [
      'A. 2H₂O₂ —MnO₂→ 2H₂O + O₂↑',
      'B. 2KMnO₄ —△→ K₂MnO₄ + MnO₂ + O₂↑',
      'C. 2KClO₃ —MnO₂△→ 2KCl + 3O₂↑',
      'D. 以上都正确'
    ],
    answer: 'D',
    explanation: '实验室制 O₂ 三大方法（必背）：\n\n① **过氧化氢分解**（推荐，常温即可）：\n2H₂O₂ —MnO₂→ 2H₂O + O₂↑\n\n② **高锰酸钾加热分解**：\n2KMnO₄ —△→ K₂MnO₄ + MnO₂ + O₂↑\n\n③ **氯酸钾催化加热**：\n2KClO₃ —MnO₂△→ 2KCl + 3O₂↑\n\n• 全部正确 → 答案 **D**',
    relatedKps: ['U014', 'M010', 'M011']
  },
  {
    id: 'q139', kpId: 'U014', type: 'choice', difficulty: 2,
    stem: '用高锰酸钾制取氧气，实验结束时正确的操作顺序是？',
    options: [
      'A. 先停止加热，再撤离导管',
      'B. 先撤离导管，再停止加热',
      'C. 同时进行',
      'D. 先关闭弹簧夹'
    ],
    answer: 'B',
    explanation: '"组查装定点收**移熄**" 中的"移熄"：\n• **先撤离导管**（移离水槽）\n• **再停止加热**（熄灭酒精灯）\n\n答案 B。\n\n**为什么？** 如果先熄火，试管温度骤降→气压减小→水槽中的水会**倒吸**进入试管→热的试管骤冷**炸裂**！\n\n💡 这是中考实验题超高频考点。',
    relatedKps: ['U014']
  },
  {
    id: 'q140', kpId: 'U014', type: 'fill', difficulty: 3,
    stem: '高锰酸钾制 O₂ 的实验步骤口诀是 7 个字：____ ____ ____ ____ ____ ____ ____',
    answer: '组;查;装;定;点;收;移熄',
    altAnswers: ['组查装定点收移熄', '组,查,装,定,点,收,移熄'],
    explanation: '**实验步骤口诀：组查装定点收移熄**\n\n• **组** — 组装仪器（由下而上、由左而右）\n• **查** — 检查气密性\n• **装** — 装药品（试管口塞棉花防止粉末进入导管）\n• **定** — 固定试管（铁夹夹试管中上部，试管口略向下）\n• **点** — 点燃酒精灯（先预热后集中加热）\n• **收** — 收集气体（连续均匀气泡冒出后开始）\n• **移熄** — 先移导管后熄酒精灯（防倒吸炸裂）\n\n💡 拆装顺序与组装相反。',
    relatedKps: ['U014']
  },

  // U015 · 过滤
  {
    id: 'q141', kpId: 'U015', type: 'choice', difficulty: 1,
    stem: '过滤时正确的操作是"一贴二低三靠"，下列描述**错误**的是？',
    options: [
      'A. 滤纸紧贴漏斗内壁',
      'B. 滤纸边缘高于漏斗边缘',
      'C. 漏斗内液面低于滤纸边缘',
      'D. 漏斗下端管口紧靠烧杯内壁'
    ],
    answer: 'B',
    explanation: '"一贴二低三靠"：\n• **一贴**：滤纸**紧贴**漏斗内壁（A ✓）\n• **二低**：①滤纸边缘**低于**漏斗边缘（B 错 ✗）②漏斗内液面**低于**滤纸边缘（C ✓）\n• **三靠**：①烧杯嘴靠玻璃棒 ②玻璃棒靠三层滤纸 ③漏斗管口靠烧杯内壁（D ✓）\n\n答案 B。',
    relatedKps: ['U015']
  },
  {
    id: 'q142', kpId: 'U015', type: 'choice', difficulty: 2,
    stem: '过滤后滤液仍然浑浊，可能的原因是？',
    options: [
      'A. 滤纸破损',
      'B. 倾倒液体时液面低于滤纸边缘',
      'C. 滤纸边缘低于漏斗边缘',
      'D. 玻璃棒下端轻靠在三层滤纸处'
    ],
    answer: 'A',
    explanation: '滤液浑浊的三个常见原因：\n① **滤纸破损**（A ✓）\n② **倾倒液体时液面高于滤纸边缘**（液体从滤纸和漏斗之间漏下来）—— B 描述的是正确做法 ✗\n③ **承接滤液的烧杯不干净**\n\n• B、C、D 都是正确操作，不会导致浑浊\n\n答案 A。\n\n💡 解决方法：换滤纸，重新过滤。',
    relatedKps: ['U015']
  },
  {
    id: 'q143', kpId: 'U015', type: 'fill', difficulty: 3,
    stem: '在化学实验中，玻璃棒在下列三种操作中的作用：\n溶解时：____\n过滤时：____\n蒸发时：____',
    answer: '搅拌，加速溶解;引流，防止液体飞溅;搅拌，防止局部过热造成液滴飞溅',
    altAnswers: ['搅拌加速溶解;引流;搅拌防止飞溅'],
    explanation: '玻璃棒的三大作用：\n\n• **溶解时** → **搅拌**，加速溶解（如配制溶液时）\n• **过滤时** → **引流**，防止液体飞溅或滤纸破损（玻璃棒靠在三层滤纸处）\n• **蒸发时** → **搅拌**，防止因局部温度过高造成液滴飞溅\n\n💡 这是高频考点：同一种仪器在不同实验中作用不同。',
    relatedKps: ['U015']
  },

  // U016 · 分子原子离子
  {
    id: 'q144', kpId: 'U016', type: 'choice', difficulty: 1,
    stem: '下列物质由分子构成的是？',
    options: ['A. 铁', 'B. 水', 'C. 氯化钠', 'D. 金刚石'],
    answer: 'B',
    explanation: '物质构成的三种粒子：\n• **分子构成**：H₂、O₂、N₂、Cl₂、H₂O、CO₂、NH₃ 等（多为非金属单质和共价化合物）\n• **原子构成**：金属（Fe/Cu）、稀有气体（He/Ne/Ar）、金刚石、石墨、硅\n• **离子构成**：NaCl、CuSO₄ 等（多为盐和强碱）\n\n• A 铁——原子\n• **B 水——分子** ✓\n• C NaCl——离子\n• D 金刚石——原子\n\n答案 B。',
    relatedKps: ['U016']
  },
  {
    id: 'q145', kpId: 'U016', type: 'choice', difficulty: 2,
    stem: '保持水化学性质的最小粒子是？',
    options: ['A. 氢原子', 'B. 氧原子', 'C. 水分子', 'D. 氢分子和氧分子'],
    answer: 'C',
    explanation: '保持物质化学性质的最小粒子：\n• 由**分子**构成的物质 → **分子**保持其化学性质\n• 由**原子**构成的物质 → **原子**保持其化学性质\n• 由**离子**构成的物质 → **离子**（如 Na⁺、Cl⁻）\n\n水由水分子构成 → 保持水化学性质的最小粒子是**水分子** ✓\n\n💡 注意区分"化学性质"和"物理性质"——分子**不能**保持物质的物理性质（如水分子单个不会有"沸腾"）。',
    relatedKps: ['U016']
  },
  {
    id: 'q146', kpId: 'U016', type: 'choice', difficulty: 3,
    stem: '关于化学变化中分子和原子的下列说法正确的是？',
    options: [
      'A. 化学变化中分子和原子都不能再分',
      'B. 化学变化中分子可分，原子不可分',
      'C. 化学变化中分子的种类不变',
      'D. 化学变化中原子的数目可能改变'
    ],
    answer: 'B',
    explanation: '化学变化中粒子的变化：\n• 分子可分 → 拆成原子\n• 原子重新组合 → 形成新分子\n\n• A 错：分子可分\n• **B 正确**：分子可分，原子是化学变化中的最小粒子 ✓\n• C 错：分子种类一定改变（这是新物质生成的微观本质）\n• D 错：原子数目不变（质量守恒的微观依据）\n\n💡 经典口诀："**化学变化中，分子可分，原子不可分**"。',
    relatedKps: ['U016', 'U002']
  },

  // U017 · 元素
  {
    id: 'q147', kpId: 'U017', type: 'choice', difficulty: 1,
    stem: '元素的概念是？',
    options: [
      'A. 具有相同质子数的一类原子的总称',
      'B. 具有相同中子数的一类原子的总称',
      'C. 具有相同电子数的一类粒子的总称',
      'D. 具有相同质量的一类原子的总称'
    ],
    answer: 'A',
    explanation: '元素 = **质子数（核电荷数）相同的一类原子的总称**。\n\n• A ✓\n• B 错：中子数不决定元素种类\n• C 错：阴阳离子电子数不同但可以是同种元素\n• D 错：质量是相对原子质量，不是元素的定义\n\n💡 决定元素种类的是 **质子数**——这是物质构成的本质。',
    relatedKps: ['U017']
  },
  {
    id: 'q148', kpId: 'U017', type: 'choice', difficulty: 2,
    stem: '下列说法正确的是？',
    options: [
      'A. 元素是宏观概念，只讲种类不讲个数',
      'B. 元素只能用元素符号表示',
      'C. 一种元素只能组成一种单质',
      'D. 元素的种类由原子的中子数决定'
    ],
    answer: 'A',
    explanation: '• **A ✓**：元素是**宏观**概念，只讲**种类**不讲个数（描述物质的"组成"）；分子、原子、离子是微观概念，既讲种类又讲个数（描述物质的"构成"）\n• B 错：还可用元素名称（中文/拉丁文）\n• C 错：一种元素可以组成多种单质——如**碳元素**可组成金刚石、石墨、C₆₀ 等多种单质\n• D 错：决定元素种类的是**质子数（核电荷数）**，不是中子数\n\n💡 区别"组成"和"构成"：\n• 水**由**氢氧元素**组成**（宏观）\n• 水**由**水分子**构成**（微观）',
    relatedKps: ['U017']
  },
  {
    id: 'q149', kpId: 'U017', type: 'choice', difficulty: 3,
    stem: '化学反应前后，下列各项**一定不变**的是？\n①元素种类 ②原子种类 ③原子数目 ④分子种类 ⑤分子数目 ⑥物质种类 ⑦元素质量',
    options: ['A. ①②③⑦', 'B. ①②③⑤⑦', 'C. ①②③④⑦', 'D. ①②③⑥⑦'],
    answer: 'A',
    explanation: '反应前后变化分析：\n\n**一定不变（六不变）**：\n① 元素种类 ✓\n② 原子种类 ✓\n③ 原子数目 ✓\n+ 原子质量、物质总质量、元素质量 ✓\n\n**一定变（两变）**：\n④ 分子种类\n⑥ 物质种类\n\n**可能变（两可能）**：\n⑤ 分子数目\n+ 元素化合价\n\n答案 **A（①②③⑦）**。\n\n💡 **六不变两变两可能** 是质量守恒定律的微观分析。',
    relatedKps: ['U017', 'U002']
  },

  // U018 · 原子结构
  {
    id: 'q150', kpId: 'U018', type: 'choice', difficulty: 1,
    stem: '在原子中，下列关系**一定**成立的是？',
    options: [
      'A. 质子数 = 中子数',
      'B. 质子数 = 核外电子数',
      'C. 质子数 = 相对原子质量',
      'D. 中子数 = 核外电子数'
    ],
    answer: 'B',
    explanation: '原子的数量关系（**核心公式**）：\n**核电荷数 = 质子数 = 核外电子数 = 原子序数**\n\n• A 错：质子数**不一定**等于中子数（如氢原子无中子）\n• **B ✓**：原子不显电性 → 正负相等\n• C 错：相对原子质量 ≈ 质子数 + 中子数\n• D 错：无必然关系\n\n💡 注意：在**原子**中正负电荷相等；在**离子**中**质子数 ≠ 电子数**（带电就是因为不等）。',
    relatedKps: ['U018']
  },
  {
    id: 'q151', kpId: 'U018', type: 'choice', difficulty: 2,
    stem: '关于原子核的说法**错误**的是？',
    options: [
      'A. 原子核由质子和中子构成',
      'B. 原子核内质子数一定等于中子数',
      'C. 原子核内质子带正电，中子不带电',
      'D. 原子的质量主要集中在原子核上'
    ],
    answer: 'B',
    explanation: '• A 正确：质子+中子（特例：**氢原子核内只有 1 个质子，没有中子**）\n• **B 错误**：质子数**不一定**等于中子数。如 ¹H（1质子0中子）、²H（1质子1中子）、³H（1质子2中子） ✗\n• C 正确\n• D 正确：电子质量极小，质量集中在核\n\n答案 B。\n\n💡 易错点："原子核内一定有中子"是错的——氢原子是反例。',
    relatedKps: ['U018']
  },
  {
    id: 'q152', kpId: 'U018', type: 'choice', difficulty: 3,
    stem: '某原子的相对原子质量为 39，质子数为 19，则中子数为？',
    options: ['A. 19', 'B. 20', 'C. 39', 'D. 58'],
    answer: 'B',
    explanation: '相对原子质量 ≈ **质子数 + 中子数**\n\n中子数 = 39 − 19 = **20** ✓\n\n答案 B。\n\n💡 这个原子是钾（K，原子序数 19，相对原子质量 39）。\n\n规律：质量数（即相对原子质量近似值）= 质子数 + 中子数。中子数 = 质量数 − 质子数。',
    relatedKps: ['U018', 'M005']
  },

  // U019 · 最外层电子
  {
    id: 'q153', kpId: 'U019', type: 'choice', difficulty: 1,
    stem: '决定元素化学性质的主要因素是？',
    options: [
      'A. 质子数',
      'B. 中子数',
      'C. 最外层电子数',
      'D. 电子层数'
    ],
    answer: 'C',
    explanation: '决定原子化学性质的是**最外层电子数**：\n\n• **金属元素**：最外层 < 4 → 易失电子（如 Na 1，Mg 2，Al 3）\n• **非金属元素**：最外层 ≥ 4 → 易得电子（如 O 6，Cl 7）\n• **稀有气体**：最外层 = 8（He 为 2）→ 稳定，不易得失\n\n💡 化学性质相似的元素，最外层电子数相同（如 Na、K 都是 1）→ 它们在元素周期表的同一族。',
    relatedKps: ['U019']
  },
  {
    id: 'q154', kpId: 'U019', type: 'choice', difficulty: 2,
    stem: '下列原子结构示意图所表示的元素中，化学性质最稳定的是？',
    options: [
      'A. 最外层 1 个电子',
      'B. 最外层 7 个电子',
      'C. 最外层 8 个电子',
      'D. 最外层 4 个电子'
    ],
    answer: 'C',
    explanation: '化学性质最稳定 = 最不易得失电子 = **最外层电子达到稳定结构**：\n• 一般稳定结构：**最外层 8 个电子**（C ✓）\n• 特殊：**He 原子最外层 2 个**（也稳定）\n\n• A 1 个电子（金属）→ 易失\n• B 7 个电子（非金属）→ 易得\n• **C 8 个电子（稀有气体）→ 稳定** ✓\n• D 4 个电子 → 不稳定\n\n答案 C。',
    relatedKps: ['U019']
  },
  {
    id: 'q155', kpId: 'U019', type: 'choice', difficulty: 3,
    stem: '某原子的结构示意图：核电荷数为 12，电子层数为 3，最外层电子数为 2。下列说法正确的是？',
    options: [
      'A. 该元素是稀有气体元素',
      'B. 该原子在化学反应中容易失去 2 个电子形成阳离子',
      'C. 该原子在化学反应中容易得到 6 个电子',
      'D. 该元素是非金属元素'
    ],
    answer: 'B',
    explanation: '核电荷数 12 → 镁元素（Mg）\n电子排布：2、8、2（K层2、L层8、M层2）\n\n• 最外层 **2 个电子** < 4 → **金属元素**\n• 易**失去** 2 个电子形成 Mg²⁺\n\n• A 错：稀有气体最外层 8 或 2，但 He 才 2 个；Mg 最外层 2 但有 3 层电子，不是稀有气体\n• **B 正确** ✓\n• C 错：金属易失不易得\n• D 错：是金属元素\n\n答案 B。',
    relatedKps: ['U019', 'U018']
  },

  // U020 · 溶质质量分数
  {
    id: 'q156', kpId: 'U020', type: 'choice', difficulty: 1,
    stem: '溶质质量分数的计算公式是？',
    options: [
      'A. 溶质质量 / 溶剂质量 × 100%',
      'B. 溶质质量 / 溶液质量 × 100%',
      'C. 溶剂质量 / 溶液质量 × 100%',
      'D. 溶液质量 / 溶质质量 × 100%'
    ],
    answer: 'B',
    explanation: '溶质质量分数 = **溶质质量 / 溶液质量 × 100%**\n\n注意：**溶液质量 = 溶质质量 + 溶剂质量**，分母是"溶液"不是"溶剂"。\n\n常见错误：分母用了溶剂质量。',
    relatedKps: ['U020']
  },
  {
    id: 'q157', kpId: 'U020', type: 'choice', difficulty: 2,
    stem: '已知 20℃时 NaCl 的溶解度是 36g。则 20℃时 NaCl 饱和溶液的溶质质量分数是？',
    options: ['A. 36%', 'B. 26.5%', 'C. 64%', 'D. 100%'],
    answer: 'B',
    explanation: '饱和溶液公式：**溶质质量分数 = S/(100+S) × 100%**\n\n代入：\n= 36/(100+36) × 100%\n= 36/136 × 100%\n≈ **26.5%** ✓\n\n💡 注意：饱和溶液中**溶质质量分数 ≠ 溶解度数值**。一个常见陷阱。',
    relatedKps: ['U020']
  },
  {
    id: 'q158', kpId: 'U020', type: 'choice', difficulty: 3,
    stem: '将 100g 溶质质量分数为 20% 的 NaCl 溶液加水稀释为 8% 的溶液，需要加水多少？',
    options: ['A. 100g', 'B. 150g', 'C. 200g', 'D. 250g'],
    answer: 'B',
    explanation: '稀释依据：**稀释前后溶质质量不变**。\n\n步骤：\n① 原溶质：100g × 20% = 20g\n② 稀释后溶液质量：20g ÷ 8% = 250g\n③ 需加水：250g − 100g = **150g**\n\n答案 B。\n\n💡 公式：A × a% = (A + m_水) × b%',
    relatedKps: ['U020']
  },

  // U021 · 配制溶液误差
  {
    id: 'q159', kpId: 'U021', type: 'choice', difficulty: 1,
    stem: '配制 50g 6% 的 NaCl 溶液，下列操作会使溶质质量分数**偏小**的是？',
    options: [
      'A. NaCl 中含有不溶性杂质',
      'B. 量取水时俯视读数',
      'C. 称量 NaCl 时砝码生锈',
      'D. 量取水后，量筒中残留水未倒入烧杯'
    ],
    answer: 'A',
    explanation: '判断思路：实际**溶质偏少**或**溶剂偏多** → 偏小\n\n• **A 含杂质 → 实际 NaCl 少 → 偏小** ✓\n• B 俯视读数 → 读数偏高 → 实际水少 → 偏大 ✗\n• C 砝码生锈 → 砝码偏重 → 实际 NaCl 多 → 偏大 ✗\n• D 量筒残水 → 实际入烧杯的水偏少 → 偏大 ✗\n\n答案 **A**。\n\n💡 通用思路："比理论值多了还是少了"。溶质少 / 溶剂多 → 偏小；溶质多 / 溶剂少 → 偏大。',
    relatedKps: ['U021']
  },
  {
    id: 'q160', kpId: 'U021', type: 'choice', difficulty: 2,
    stem: '下列操作会使配制的溶液溶质质量分数**偏大**的是？',
    options: [
      'A. 量取水时仰视读数',
      'B. 量取水时俯视读数',
      'C. 烧杯内原本有少量水',
      'D. NaCl 中含不溶性杂质'
    ],
    answer: 'B',
    explanation: '量筒读数规律（关键易混点）：\n• **量取液体时**：仰视 → 读数偏低 → **实际取得偏多** → 溶剂多 → 浓度**偏小**\n• **量取液体时**：俯视 → 读数偏高 → **实际取得偏少** → 溶剂少 → 浓度**偏大**\n\n• A 仰视 → 水偏多 → 偏小\n• **B 俯视 → 水偏少 → 偏大** ✓\n• C 烧杯有水 → 水偏多 → 偏小\n• D 含杂质 → 溶质偏少 → 偏小\n\n答案 B。\n\n💡 口诀："仰大俯小"——但要分清是**读数**还是**实际值**！',
    relatedKps: ['U021']
  },
  {
    id: 'q161', kpId: 'U021', type: 'choice', difficulty: 3,
    stem: '稀释浓溶液时，下列操作不会引起所配溶液质量分数偏差的是？',
    options: [
      'A. 量取浓溶液时仰视读数',
      'B. 量取水时俯视读数',
      'C. 转移浓溶液时部分洒出',
      'D. 量取的水恰好与计算值相等'
    ],
    answer: 'D',
    explanation: '稀释偏差分析：\n• A 仰视量浓溶液 → 实际取浓溶液**多** → 溶质多 → **偏大**\n• B 俯视量水 → 实际取水**少** → 溶剂少 → **偏大**\n• C 浓溶液洒了 → 溶质少 → **偏小**\n• **D 量取恰好 → 无偏差** ✓\n\n答案 D。\n\n💡 稀释操作题型与配制题型逻辑相同，关键是看"实际值"vs"理论值"。',
    relatedKps: ['U021']
  },

  // U022 · 离子检验
  {
    id: 'q162', kpId: 'U022', type: 'choice', difficulty: 1,
    stem: '检验某溶液中是否含有 CO₃²⁻，正确的方法是？',
    options: [
      'A. 加入紫色石蕊溶液',
      'B. 加入稀盐酸，将产生的气体通入澄清石灰水',
      'C. 加入 BaCl₂ 溶液',
      'D. 加入 NaOH 溶液'
    ],
    answer: 'B',
    explanation: '检验 CO₃²⁻（或 HCO₃⁻）的标准方法：\n**取样 → 加稀盐酸 → 产生气体 → 通入澄清石灰水 → 变浑浊**\n\n方程式：\n• Na₂CO₃ + 2HCl = 2NaCl + H₂O + CO₂↑\n• Ca(OH)₂ + CO₂ = CaCO₃↓ + H₂O\n\n两步缺一不可：\n① 加酸产生气体（说明可能是 CO₃²⁻ 或 HCO₃⁻）\n② 通石灰水变浑浊（确认气体是 CO₂）\n\n答案 B。',
    relatedKps: ['U022']
  },
  {
    id: 'q163', kpId: 'U022', type: 'choice', difficulty: 2,
    stem: '区分 NaCl 溶液和 Na₂SO₄ 溶液，应选用的试剂是？',
    options: ['A. 稀盐酸', 'B. AgNO₃ 溶液', 'C. Ba(NO₃)₂ 溶液', 'D. NaOH 溶液'],
    answer: 'C',
    explanation: '区分要找**只与一种反应**的试剂：\n\n• A 稀盐酸：都不反应 ✗\n• B AgNO₃：与 NaCl 生成 AgCl↓（白），与 Na₂SO₄ 生成 **Ag₂SO₄微溶** 也是浑浊 → 难区分 ✗\n• **C Ba(NO₃)₂：与 NaCl 不反应；与 Na₂SO₄ 生成 BaSO₄↓（白色）** ✓\n• D NaOH：都不反应 ✗\n\n答案 C。\n\n💡 重点：**检验 SO₄²⁻ 用 Ba(NO₃)₂（不用 BaCl₂，因为可能引入 Cl⁻）**。',
    relatedKps: ['U022']
  },
  {
    id: 'q164', kpId: 'U022', type: 'choice', difficulty: 3,
    stem: '某溶液可能含有 Na⁺、Cl⁻、SO₄²⁻、CO₃²⁻ 中的一种或几种。向溶液中先加足量稀 HNO₃ 无气体产生，再加 Ba(NO₃)₂ 出现白色沉淀，最后加 AgNO₃ 也出现白色沉淀。该溶液中一定含有？',
    options: [
      'A. Cl⁻、SO₄²⁻',
      'B. Cl⁻、CO₃²⁻',
      'C. SO₄²⁻、CO₃²⁻',
      'D. Cl⁻、SO₄²⁻、CO₃²⁻'
    ],
    answer: 'A',
    explanation: '逐步分析：\n\n① 加稀 HNO₃ **无气体** → **没有 CO₃²⁻**（有 CO₃²⁻ 会产生 CO₂）\n② 加 Ba(NO₃)₂ 出现白色沉淀 → 是 BaSO₄ → **含 SO₄²⁻**\n③ 加 AgNO₃ 出现白色沉淀 → 是 AgCl → **含 Cl⁻**\n\n所以一定含 **Cl⁻ 和 SO₄²⁻**，一定不含 CO₃²⁻。\n\n答案 **A**。\n\n💡 关键技巧：检验顺序——**先排除 CO₃²⁻**（用酸），**再用 Ba²⁺ 检 SO₄²⁻**，**最后用 Ag⁺ 检 Cl⁻**（顺序不能反，否则前面引入的 Cl⁻ 会干扰）。',
    relatedKps: ['U022']
  },

  // U023 · 化肥鉴别
  {
    id: 'q165', kpId: 'U023', type: 'choice', difficulty: 1,
    stem: '下列化肥中，属于氮肥的是？',
    options: [
      'A. KCl',
      'B. NH₄Cl',
      'C. Ca₃(PO₄)₂',
      'D. K₂SO₄'
    ],
    answer: 'B',
    explanation: '化肥分类（看含哪种元素）：\n• **氮肥**：含 N，如 NH₄Cl、NH₄NO₃、CO(NH₂)₂（尿素）\n• **磷肥**：含 P，如 Ca₃(PO₄)₂\n• **钾肥**：含 K，如 KCl、K₂SO₄\n• **复合肥**：同时含 N、P、K 中两种或以上，如 KNO₃\n\n• A KCl 钾肥\n• **B NH₄Cl 氮肥** ✓\n• C 磷肥\n• D 钾肥\n\n答案 B。',
    relatedKps: ['U023']
  },
  {
    id: 'q166', kpId: 'U023', type: 'choice', difficulty: 2,
    stem: '铵态氮肥（如 NH₄Cl、NH₄NO₃）**不能**与下列哪类物质混用？',
    options: ['A. 酸性物质', 'B. 中性物质', 'C. 碱性物质（如熟石灰）', 'D. 氧化性物质'],
    answer: 'C',
    explanation: '铵态氮肥（含 NH₄⁺）+ 碱性物质 → 反应生成 NH₃↑（氨气挥发）→ 肥效降低！\n\n方程式（以熟石灰为例）：\n2NH₄Cl + Ca(OH)₂ = CaCl₂ + 2H₂O + 2NH₃↑\n\n• **C 碱性物质（如熟石灰、草木灰）不能与铵态氮肥混用** ✓\n\n💡 这也是检验 NH₄⁺ 的方法：加 NaOH/Ca(OH)₂ → 产生气体使**湿润的红色石蕊试纸变蓝**。',
    relatedKps: ['U023', 'U022']
  },
  {
    id: 'q167', kpId: 'U023', type: 'choice', difficulty: 3,
    stem: '简易区分氮肥、磷肥、钾肥（NH₄Cl、Ca₃(PO₄)₂、KCl）的方法是？',
    options: [
      'A. 看颜色：白色的是氮肥/钾肥，灰白色的是磷肥',
      'B. 看溶解性：易溶的是氮肥/钾肥，难溶的是磷肥',
      'C. 加碱研磨：有刺激性气味气体的是氮肥',
      'D. 以上方法综合使用'
    ],
    answer: 'D',
    explanation: '化肥简易鉴别思路：\n\n**第一步**：看颜色 + 溶解性\n• 灰白色，难溶水 → **磷肥**\n• 白色，易溶水 → 氮肥或钾肥（继续区分）\n\n**第二步**：加碱研磨\n• 有刺激性气味（NH₃）→ **氮肥**（NH₄⁺）\n• 无气味 → **钾肥**\n\n所以三个方法是**配套使用**的，答案 **D**。\n\n💡 整套思路：**外观→溶解→加碱→根据气味判断**。',
    relatedKps: ['U023']
  },

  // U024 · 化石能源
  {
    id: 'q168', kpId: 'U024', type: 'choice', difficulty: 1,
    stem: '下列**不属于**三大化石能源的是？',
    options: ['A. 煤', 'B. 石油', 'C. 天然气', 'D. 氢气'],
    answer: 'D',
    explanation: '三大化石能源：**煤、石油、天然气**——都是**不可再生**能源。\n\n• A 煤 ✓\n• B 石油 ✓\n• C 天然气 ✓\n• **D 氢气 — 是新能源（可再生）** ✗\n\n💡 化石能源都来自远古生物遗体经亿万年地质作用形成，使用一点少一点，**不可再生**。',
    relatedKps: ['U024']
  },
  {
    id: 'q169', kpId: 'U024', type: 'choice', difficulty: 2,
    stem: '下列能源中，属于**可再生能源**的是？',
    options: ['A. 煤', 'B. 石油', 'C. 太阳能', 'D. 天然气'],
    answer: 'C',
    explanation: '能源分类：\n• **不可再生**：煤、石油、天然气（化石能源）、核能\n• **可再生**：太阳能、风能、水能、地热能、生物质能、潮汐能\n\n• A、B、D 化石能源 → 不可再生\n• **C 太阳能 → 可再生** ✓\n\n💡 氢能虽是清洁能源，但严格说氢气需要从其他物质（如水）制取，按制取方式分类。',
    relatedKps: ['U024']
  },
  {
    id: 'q170', kpId: 'U024', type: 'choice', difficulty: 3,
    stem: '下列说法**错误**的是？',
    options: [
      'A. 甲烷是天然气的主要成分',
      'B. 氢气是最理想的清洁能源',
      'C. 煤、石油都是混合物',
      'D. 燃烧化石能源不会污染环境'
    ],
    answer: 'D',
    explanation: '• A 正确：天然气主要成分 CH₄\n• B 正确：氢气燃烧产物只有水，热值高，是最清洁的燃料\n• C 正确：煤主要含 C，但还有 S、N 等；石油是多种烃的混合物\n• **D 错误**：化石能源燃烧产生 SO₂（酸雨）、NO₂（酸雨/光化学烟雾）、CO₂（温室效应）、烟尘等 ✗\n\n答案 D。',
    relatedKps: ['U024']
  },

  // U025 · 单质化合物氧化物
  {
    id: 'q171', kpId: 'U025', type: 'choice', difficulty: 1,
    stem: '下列物质中，属于氧化物的是？',
    options: ['A. O₂', 'B. KMnO₄', 'C. Fe₃O₄', 'D. NaOH'],
    answer: 'C',
    explanation: '氧化物定义：\n① **由两种元素组成**\n② **其中一种是氧元素**\n（缺一不可）\n\n• A O₂——单质（一种元素）✗\n• B KMnO₄——含 K、Mn、O **三种**元素，不是氧化物 ✗\n• **C Fe₃O₄——Fe 和 O 两种元素，是氧化物** ✓\n• D NaOH——含 Na、O、H 三种元素，不是氧化物 ✗\n\n答案 C。\n\n💡 易错点：含氧化合物 ≠ 氧化物。如 H₂SO₄、KMnO₄ 都含氧但不是氧化物（元素超过 2 种）。',
    relatedKps: ['U025']
  },
  {
    id: 'q172', kpId: 'U025', type: 'choice', difficulty: 2,
    stem: '下列物质的分类正确的是？',
    options: [
      'A. 空气、氮气都是单质',
      'B. 蒸馏水、海水都是化合物',
      'C. CaO、Fe₂O₃ 都是氧化物',
      'D. NaCl、KMnO₄ 都是氧化物'
    ],
    answer: 'C',
    explanation: '物质分类树：\n```\n物质\n├─ 纯净物\n│   ├─ 单质（一种元素）\n│   └─ 化合物（≥ 2 种元素）\n│       └─ 氧化物（2 种元素，含氧）\n└─ 混合物\n```\n\n• A 错：空气是混合物\n• B 错：海水是混合物\n• **C 正确**：CaO（Ca+O）、Fe₂O₃（Fe+O），都是氧化物 ✓\n• D 错：NaCl 不含氧；KMnO₄ 含氧但 3 种元素\n\n答案 C。',
    relatedKps: ['U025']
  },
  {
    id: 'q173', kpId: 'U025', type: 'choice', difficulty: 3,
    stem: '某物质的化学式为 H₃BO₃，下列说法错误的是？',
    options: [
      'A. 是化合物',
      'B. 是氧化物',
      'C. 含有 H、B、O 三种元素',
      'D. 是纯净物'
    ],
    answer: 'B',
    explanation: '分析 H₃BO₃（硼酸）：\n• 含 H、B、O **三种**元素\n• 是**化合物**（多种元素的纯净物）\n• **不是氧化物**（氧化物只能 2 种元素）\n\n• A 正确（化合物）\n• **B 错误**（不是氧化物——3 种元素）✗\n• C 正确\n• D 正确（化合物属于纯净物）\n\n答案 B。',
    relatedKps: ['U025']
  },

  // U026 · 反应类型对比
  {
    id: 'q174', kpId: 'U026', type: 'choice', difficulty: 1,
    stem: '下列反应属于化合反应的是？',
    options: [
      'A. 2H₂O₂ —MnO₂→ 2H₂O + O₂↑',
      'B. CaO + H₂O = Ca(OH)₂',
      'C. Fe + CuSO₄ = FeSO₄ + Cu',
      'D. NaOH + HCl = NaCl + H₂O'
    ],
    answer: 'B',
    explanation: '四种基本反应类型：\n• **化合**：A+B→AB（多变一）\n• **分解**：AB→A+B（一变多）\n• **置换**：A+BC→AC+B（单换单）\n• **复分解**：AB+CD→AD+CB（互换）\n\n• A 1变多 → 分解\n• **B 2 变 1 → 化合** ✓\n• C 单换单 → 置换\n• D 互换 → 复分解\n\n答案 B。',
    relatedKps: ['U026']
  },
  {
    id: 'q175', kpId: 'U026', type: 'choice', difficulty: 2,
    stem: '下列反应**不属于**四种基本反应类型的是？',
    options: [
      'A. CaCO₃ + 2HCl = CaCl₂ + H₂O + CO₂↑',
      'B. 2NaOH + CO₂ = Na₂CO₃ + H₂O',
      'C. C + 2CuO —高温→ 2Cu + CO₂↑',
      'D. 4Al + 3O₂ = 2Al₂O₃'
    ],
    answer: 'B',
    explanation: '逐项分析：\n• A 复分解 ✓\n• **B 碱+非金属氧化物 → 不属于四种基本类型** ✓ 答案\n• C 置换 ✓\n• D 化合 ✓\n\n💡 **常见"不属于四种基本反应类型"的反应**：\n① 碱 + 非金属氧化物（NaOH+CO₂、Ca(OH)₂+CO₂）\n② CO 还原氧化物（CO+CuO→Cu+CO₂、3CO+Fe₂O₃→2Fe+3CO₂）\n\n注意：酸+金属氧化物（如 Fe₂O₃+HCl）属于**复分解反应**，不是反例。',
    relatedKps: ['U026', 'X001']
  },
  {
    id: 'q176', kpId: 'U026', type: 'choice', difficulty: 3,
    stem: '下列说法正确的是？',
    options: [
      'A. 化合反应一定是氧化反应',
      'B. 复分解反应都是化合反应的逆反应',
      'C. 置换反应必有单质参加和生成',
      'D. 分解反应都需要加热'
    ],
    answer: 'C',
    explanation: '• A 错：化合反应不一定与 O₂ 有关（如 CaO+H₂O=Ca(OH)₂）\n• B 错：复分解和化合是不同类型\n• **C 正确**：置换反应**必有单质**参加和生成（A+BC→AC+B 中 A 和 B 是单质）✓\n• D 错：H₂O₂ 在 MnO₂ 催化下常温分解，不需加热\n\n答案 C。',
    relatedKps: ['U026']
  },

  // U027 · 溶液特征
  {
    id: 'q177', kpId: 'U027', type: 'choice', difficulty: 1,
    stem: '溶液的基本特征是？',
    options: [
      'A. 透明、无色、液态',
      'B. 均一、稳定、混合物',
      'C. 有溶解、有过滤',
      'D. 含水的液体'
    ],
    answer: 'B',
    explanation: '溶液三大特征（必背）：\n• **均一**：各部分性质完全相同\n• **稳定**：外界条件不变时溶质溶剂不分层\n• **混合物**：由溶质和溶剂组成\n\n• A 错：溶液不一定无色（CuSO₄ 蓝色）\n• **B 正确** ✓\n• C 错：是过程描述\n• D 错：溶剂可以不是水（如碘酒）\n\n💡 重要："均一+稳定 ≠ 溶液"——纯净水也是均一稳定的，但不是混合物所以不是溶液。',
    relatedKps: ['U027']
  },
  {
    id: 'q178', kpId: 'U027', type: 'choice', difficulty: 2,
    stem: '下列说法正确的是？',
    options: [
      'A. 溶液一定是无色透明的',
      'B. 溶液一定是液体',
      'C. 均一稳定的液体一定是溶液',
      'D. 空气、合金都可以看作溶液'
    ],
    answer: 'D',
    explanation: '• A 错：溶液不一定无色（CuSO₄ 蓝、FeSO₄ 浅绿、Fe₂(SO₄)₃ 黄、KMnO₄ 紫红）\n• B 错：溶液不一定是液体——**气态溶液（空气）、固态溶液（合金）都存在**\n• C 错：纯水也是均一稳定液体但不是溶液（不是混合物）\n• **D 正确**：空气是气态混合物，合金是固态混合物，都符合溶液三特征 ✓\n\n答案 D。',
    relatedKps: ['U027']
  },
  {
    id: 'q179', kpId: 'U027', type: 'choice', difficulty: 3,
    stem: '下列**不属于**溶液的是？',
    options: ['A. 蒸馏水', 'B. 食盐水', 'C. 碘酒', 'D. 稀盐酸'],
    answer: 'A',
    explanation: '判断溶液三特征：均一+稳定+混合物。\n\n• **A 蒸馏水——纯净物，不是溶液** ✓ 答案\n• B 食盐水（NaCl 在水中）——溶液 ✗\n• C 碘酒（碘溶于酒精）——溶液 ✗\n• D 稀盐酸（HCl 气体溶于水）——溶液 ✗\n\n💡 易错："水"和"溶液"区别——纯净的水不是溶液，但溶有其他物质的水才是溶液（如自来水其实是溶液，因含杂质）。',
    relatedKps: ['U027']
  },

  // U028 · 饱和与浓稀
  {
    id: 'q180', kpId: 'U028', type: 'choice', difficulty: 1,
    stem: '关于饱和溶液的下列说法正确的是？',
    options: [
      'A. 饱和溶液中不能再溶解任何物质',
      'B. 饱和溶液一定是浓溶液',
      'C. 一定温度下，某物质的饱和溶液不能再溶解该物质',
      'D. 升温后饱和溶液一定变成不饱和溶液'
    ],
    answer: 'C',
    explanation: '饱和溶液定义：在**一定温度**下，向**一定量溶剂**中加入**某种溶质**，**不能继续溶解**时所得的溶液。\n\n• A 错：饱和溶液**还能溶解其他物质**（如 NaCl 饱和溶液还能溶 KNO₃）\n• B 错：饱和**不一定**浓（如石灰水是稀的饱和溶液）\n• **C 正确**：饱和必须针对**某种**溶质 ✓\n• D 错：Ca(OH)₂ 饱和溶液**升温反而析出沉淀**（溶解度反向变化）\n\n答案 C。',
    relatedKps: ['U028']
  },
  {
    id: 'q181', kpId: 'U028', type: 'choice', difficulty: 2,
    stem: '下列说法正确的是？',
    options: [
      'A. 浓溶液一定是饱和溶液',
      'B. 稀溶液一定是不饱和溶液',
      'C. 饱和溶液一定是浓溶液',
      'D. 同种物质的饱和溶液浓度比不饱和溶液大'
    ],
    answer: 'D',
    explanation: '浓稀 vs 饱和不饱和（**核心区分**）：\n• **浓稀**：溶质溶解的相对**多少**\n• **饱和不饱和**：溶质溶解是否**达到最大限度**\n\n• A 错：浓不一定饱和（饱和定义是看是否还能溶）\n• B 错：稀不一定不饱和（**石灰水是稀的饱和溶液**）\n• C 错：饱和不一定浓\n• **D 正确**：温度一定时，**同种物质**的饱和溶液浓度**最大** ✓\n\n答案 D。',
    relatedKps: ['U028', 'U027']
  },
  {
    id: 'q182', kpId: 'U028', type: 'choice', difficulty: 3,
    stem: '在 t℃ 时，向 50g 水中加入 5g NaCl 完全溶解，所得溶液一定是？',
    options: ['A. 饱和溶液', 'B. 不饱和溶液', 'C. 浓溶液', 'D. 无法确定饱不饱和'],
    answer: 'D',
    explanation: '判断饱和的关键：是否还能继续溶解？\n\n本题没有给出 t℃ 时 NaCl 的溶解度，所以**不能判断**饱和与否：\n• 若 t℃ 时 NaCl 溶解度 = 10g/100g 水（即 50g 水最多溶 5g），则**恰好饱和**\n• 若 > 10g/100g，则**不饱和**\n• 若 < 10g/100g，则不可能"完全溶解"（与题设矛盾）\n\n所以答案 **D 无法确定**。\n\n💡 判断溶液是否饱和的两种方法：\n① 看是否有未溶解的固体\n② 继续加入该溶质，看能否继续溶解',
    relatedKps: ['U028']
  },

  // U029 · 工业炼铁
  {
    id: 'q183', kpId: 'U029', type: 'choice', difficulty: 1,
    stem: '工业上用一氧化碳还原赤铁矿炼铁的化学方程式正确的是？',
    options: [
      'A. CO + Fe₂O₃ —高温→ Fe + CO₂',
      'B. 3CO + Fe₂O₃ —高温→ 2Fe + 3CO₂',
      'C. 2CO + Fe₂O₃ —高温→ 2Fe + 2CO₂',
      'D. 3CO + 2Fe₂O₃ —高温→ 4Fe + 3CO₂'
    ],
    answer: 'B',
    explanation: '工业炼铁主反应（必背）：\n**3CO + Fe₂O₃ —高温→ 2Fe + 3CO₂**\n\n配平验证：\n• Fe：左 2，右 2 ✓\n• C：左 3，右 3 ✓\n• O：左 3+3=6，右 6 ✓\n\n答案 B。\n\n💡 注意：CO₂ **不写 ↑**（反应物 CO 也是气体，气体生成气体不标 ↑）。',
    relatedKps: ['U029', 'M016']
  },
  {
    id: 'q184', kpId: 'U029', type: 'choice', difficulty: 2,
    stem: '工业炼铁的高炉中加入石灰石（CaCO₃）的作用是？',
    options: [
      'A. 吸收 CO₂',
      'B. 与铁矿石反应生成铁',
      'C. 高温分解生成 CaO，再与 SiO₂ 反应除去杂质',
      'D. 增加炉温'
    ],
    answer: 'C',
    explanation: '高炉炼铁原料：\n• 铁矿石（提供铁，如 Fe₂O₃）\n• 焦炭（提供热量和生成 CO 的碳源）\n• **石灰石（CaCO₃）—— 除去铁矿石中的 SiO₂ 杂质**\n• 空气（提供 O₂）\n\n石灰石作用机理：\n① CaCO₃ —高温→ CaO + CO₂↑\n② CaO + SiO₂ —高温→ CaSiO₃（炉渣）\n\n答案 **C** ✓\n\n💡 产物：**生铁**（含碳量 2%-4.3%）。',
    relatedKps: ['U029']
  },
  {
    id: 'q185', kpId: 'U029', type: 'choice', difficulty: 3,
    stem: '用含 Fe₂O₃ 80% 的赤铁矿 100t 炼铁，理论上可炼出**纯铁**多少 t？（铁的损失忽略不计；Fe₂O₃ 相对分子质量 160）',
    options: ['A. 56t', 'B. 70t', 'C. 80t', 'D. 100t'],
    answer: 'A',
    explanation: '解题步骤：\n\n① 算纯 Fe₂O₃ 质量：100t × 80% = **80t**（其余 20t 是杂质，不参与反应）\n\n② 用方程式比例算 Fe：\n3CO + Fe₂O₃ —高温→ 2Fe + 3CO₂\n质量比 Fe₂O₃ : Fe = 160 : (2×56) = 160 : 112\n\n80t × (112/160) = **56t** Fe\n\n答案 **A（56t）**。\n\n💡 中考工业流程题套路：先算纯反应物（去杂质），再用化学方程式的质量比换算产物。',
    relatedKps: ['U029']
  },

  // U030 · 除杂思路
  {
    id: 'q186', kpId: 'U030', type: 'choice', difficulty: 1,
    stem: '除去物质中的杂质，下列除杂方法**符合**"不引入新杂质"原则的是？',
    options: [
      'A. 除去 CO₂ 中的 CO，通过澄清石灰水',
      'B. 除去 CO 中的 CO₂，通过 NaOH 溶液',
      'C. 除去 N₂ 中的 O₂，通入空气',
      'D. 除去 NaCl 溶液中的 CaCl₂，加入 Na₂CO₃ 至完全反应'
    ],
    answer: 'B',
    explanation: '除杂三原则：\n① **不引入新杂质**（最重要）\n② **不减少原物质**\n③ **过程简便**\n\n• A 错：CO 不与石灰水反应，无法除去 ✗\n• **B 正确**：CO + NaOH 不反应；CO₂ + NaOH → Na₂CO₃ + H₂O，CO₂ 被吸收，CO 保留 ✓\n• C 错：空气含 N₂、O₂ 等，加进去引入更多杂质 ✗\n• D 错：加 Na₂CO₃ 会引入新的 Na₂CO₃ 杂质（应加 Na₂CO₃ 后再过滤） ✗\n\n答案 B。',
    relatedKps: ['U030']
  },
  {
    id: 'q187', kpId: 'U030', type: 'choice', difficulty: 2,
    stem: '除去 Cu 粉中混有少量 Fe 粉，下列**化学方法**中最简便的是？',
    options: [
      'A. 加入足量稀盐酸，过滤，洗涤，干燥',
      'B. 加入足量 CuSO₄ 溶液，过滤，洗涤，干燥',
      'C. 加入足量 NaOH 溶液，过滤',
      'D. 加热使 Fe 转化为 Fe₂O₃'
    ],
    answer: 'A',
    explanation: '思路：保留 Cu，除去 Fe，且不引入新杂质。\n\n• **A 加稀盐酸**：Fe + 2HCl = FeCl₂ + H₂↑（Fe 溶解，Cu 不反应）→ 过滤即得纯 Cu ✓ **最简便**\n• B 加 CuSO₄：Fe + CuSO₄ = FeSO₄ + Cu（虽可行）→ 但**会让 Cu 的质量增加**，原物质量改变 ✗\n• C 加 NaOH：Fe 与 NaOH 不反应，无法除去 ✗\n• D 加热生成 Fe₂O₃：Cu 也会被氧化为 CuO，反而引入新杂质 ✗\n\n答案 **A**。\n\n💡 物理方法（如磁铁吸引 Fe）也能除去，但本题限定"化学方法"。',
    relatedKps: ['U030', 'M012']
  },
  {
    id: 'q188', kpId: 'U030', type: 'choice', difficulty: 3,
    stem: '下列除杂方法**错误**的是（括号内为杂质）？',
    options: [
      'A. NaCl 溶液（Na₂CO₃）—— 加入适量稀盐酸',
      'B. CO₂（HCl）—— 通过 NaOH 溶液',
      'C. CaCl₂ 溶液（HCl）—— 加入适量 CaCO₃',
      'D. CO（CO₂）—— 通过 NaOH 溶液'
    ],
    answer: 'B',
    explanation: '逐项分析：\n\n• **A** ✓：Na₂CO₃ + 2HCl = 2NaCl + H₂O + CO₂↑\n  除杂质同时生成 NaCl，不引入新物质\n\n• **B** ✗ 错误：通过 NaOH 时，HCl + NaOH = NaCl + H₂O ✓ 但 **CO₂ 也会被吸收**（2NaOH+CO₂=Na₂CO₃+H₂O），主物质损失！\n  正确做法：用**饱和 NaHCO₃ 溶液**（吸 HCl 不吸 CO₂）\n\n• **C** ✓：CaCO₃ + 2HCl = CaCl₂ + H₂O + CO₂↑\n  CaCO₃ 不溶于水，吸完 HCl 后过滤即可\n\n• **D** ✓：CO 不与 NaOH 反应；CO₂ + 2NaOH = Na₂CO₃ + H₂O\n  CO₂ 被吸收，CO 保留\n\n答案 **B**。\n\n💡 除杂铁律：**不引入新杂质 + 不减少原物质**。',
    relatedKps: ['U030']
  }
];

// ============================================================
// 题库统计：必背 90 + 必懂 90 + 易混 4 + TOP20 4 = 188 题
// ============================================================

// ============================================================
// 启发式提示（答错后第 2 步显示，专属于每道题，不直接给答案）
// ============================================================
const HINTS = {
  // M001 前 20 号元素符号
  'q001': '元素符号书写规则——首字母大写，第二个字母小写。逐项扫一眼，哪个不符合？',
  'q002': '第二周期：开头是锂、铍（金属），中间 5 个非金属（B 硼起），最后是稀有气体氖。一共 8 个元素。',
  'q003': '锡的元素符号是 Sn（来自拉丁文 Stannum）。那 S 是什么的简写？想想"硫磺"。',

  // M002 金属活动性顺序
  'q004': '默念活动性口诀，4 个选项的位置在前还是在后？最前的就是最强。',
  'q005': '"钾钙钠镁铝，锌铁锡铅氢"——前 6 个是哪 6 个？',
  'q006': '能与酸反应放 H₂ 的金属，必须排在 (H) 前。Cu/Ag/Au 都在 H 后面——所以呢？',

  // M003 常见原子团
  'q007': '4 个原子团里只有 1 个带正电（NH₄⁺）。剩下三个 −1 价中混着一个 −2 价的——SO₄ 和 NO₃ 哪个是 −2？',
  'q008': '碳酸根来自 H₂CO₃ 去掉 2 个 H；磷酸根来自 H₃PO₄ 去掉 3 个 H；铵根带正电要标 +。',
  'q009': '含 OH⁻ 原子团的物质叫"碱"。4 个选项里哪个属于碱（化学式中能看出 (OH) 结构的）？',

  // M004 其他常考元素
  'q010': 'Mn 是金属元素，常见化合物有 KMnO₄、MnO₂——能想起对应的中文名吗？',
  'q011': '钡 Ba（B大写、a小写）；钛 Ti；溴 Br；碘 I（一个字母也要大写）。',
  'q012': '把每个选项的化学式拆开看含哪些元素。BaSO₄ 含 Ba（钡），是检 SO₄²⁻ 的标志性沉淀。',

  // M005 常见元素化合价
  'q013': '化合价口诀第一句"二价钙镁钡氧锌"——4 个选项中谁在这句里？',
  'q014': '想想 FeCl₂ 和 Fe₂O₃ 中铁分别几价？Cu₂O 和 CuO 中铜分别几价？"铜汞一二铁二三"。',
  'q015': '单质化合价 = 0；化合物代数和 = 0。但氢和氧也有特例：H₂O₂ 中 O 是几价？',

  // M006 由化学式求化合价
  'q016': '设 Mn 为 x。K(+1)、O(−2)。列方程：(+1) + x + (−2)×4 = 0。解 x。',
  'q017': 'NH₄NO₃ = NH₄⁺ + NO₃⁻ 两部分。先算 NH₄⁺ 里的 N（整体 +1），再算 NO₃⁻ 里的 N（整体 −1）。',
  'q018': '设 Fe 为 x。Na(+1)、O(−2)。Na₂FeO₄ 中：(+1)×2 + x + (−2)×4 = 0。解 x。',

  // M007 由化合价写化学式
  'q019': 'Al(+3)、O(−2)。最小公倍数 6 → Al 是 6/3=2 个，O 是 6/2=3 个。',
  'q020': '原子团 ≥ 2 个要加括号。Fe(+3) + OH(−1) → Fe 后面挂几个 OH？',
  'q021': '一个原子团时不加括号（KNO₃ 不是 K(NO₃)）。NaOH₂ 这种写法对吗？',

  // M008 单质 + O₂
  'q022': '铁 + O₂ 高温下生成的特殊产物是 Fe₃O₄（不是 Fe₂O₃！），配平时左 3Fe 右 3Fe 怎么配？',
  'q023': '镁是 +2 价 → 产物 MgO（不是 MgO₂）。再看条件、配平、化学式有没有错的。',
  'q024': '硫的氧化物只有 SO₂（一种），不需要配平。火焰颜色：在氧气中和空气中不一样——是？',

  // M009 气体可燃物燃烧
  'q025': 'CH₄ 含 1C 和 4H。充分燃烧产物 CO₂ + H₂O。先平 C（→1CO₂），再平 H（→2H₂O），最后平 O（→2O₂）。',
  'q026': '氢气燃烧产物是水。火焰是淡蓝色（注意不是蓝紫色——那是硫）。点燃前必须验纯。',
  'q027': 'C₂H₅OH 含 2C、6H、1O。先平 C（→2CO₂）、平 H（→3H₂O），左边 H₂O 多少个 H 就几个。再算 O 配 O₂。',

  // M010 加热分解
  'q028': '高锰酸钾分解的 3 个产物——锰酸钾、二氧化锰、氧气。条件 △，气体写 ↑。',
  'q029': 'MnO₂ 写在等号上方说明是催化剂，不是反应物。1 种 KClO₃ 分解成 2 种产物——什么类型？',
  'q030': '高炉炼铁加石灰石——石灰石 = CaCO₃，高温分解后生成 CaO，CaO 再与 SiO₂ 反应除杂。',

  // M011 H₂O₂ / 水电解
  'q031': 'H₂O₂ 分解产物是 H₂O 和 O₂。MnO₂ 是催化剂——写哪里？需不需要 △（注意：常温就行）？',
  'q032': '电解水"正氧负氢，氢二氧一"。氢气体积是氧气的 2 倍。',
  'q033': '电解水方程 2H₂O → 2H₂ + O₂。质量比 4:32:36。36g 水按比例算 H₂ 多少？',

  // M012 金属 + HCl
  'q034': '锌 +2 价，盐酸 H+1、Cl−1。产物 ZnCl₂（不是 ZnCl）。配平 H 数。',
  'q035': '铁与酸反应铁显几价？记住"置换反应中铁是 +2 价"。',
  'q036': '浅绿色 = Fe²⁺。Cu 在 H 后不反应。Mg/Zn 的盐溶液无色——那答案在剩下的里。',

  // M013 金属 + H₂SO₄
  'q037': '镁 +2 价，SO₄ −2 价。比例 1:1，盐叫硫酸镁 MgSO₄。',
  'q038': '铝 +3 价，SO₄ −2 价。先确定盐的化学式 Al₂(SO₄)₃，再配平 H。',
  'q039': '等质量 → 看每"克"金属能产 H₂ 多少。质量/相对原子质量 × 化合价 = H 数。哪个最大？',

  // M014 金属 + 盐溶液
  'q040': '"曾青得铁则化为铜"——铁置换出铜。Fe + CuSO₄ → 现象是铁上有什么颜色固体？',
  'q041': '铜置换银。Cu 是 +2 价（不是 +1），银 +1 价。Cu(NO₃)₂ 溶液是什么颜色？',
  'q042': '活动性 Fe>Cu>Ag。Fe 先和谁反应（活动性差大的优先）？Zn 在 Fe 之前——Zn(NO₃)₂ 会被反应吗？',

  // M015 H₂/C 还原
  'q043': 'H₂ + CuO 条件是 △（不是高温）。黑色 CuO → 红色 Cu，试管口有水珠。',
  'q044': 'C + CuO 条件是高温（比 △ 更高）。生成单质 Cu + 气体 CO₂↑。',
  'q045': '氢还原氧化铁。还原剂 = 夺氧的 = 自身被氧化；氧化剂 = 失氧的 = 自身被还原。',

  // M016 CO 还原
  'q046': 'CO + CuO 条件是 △（注意不是高温！与 C+CuO 不同）。CO₂ 写 ↑ 吗？反应物 CO 也是气体——所以？',
  'q047': '工业炼铁 CO + Fe₂O₃ → Fe + CO₂。配平：右边 Fe 是 2，左边 Fe₂O₃ 是 1。再平 O。',
  'q048': 'CO 有毒——尾气必须处理。先通 CO 排空气还是先加热？防爆怎么操作？',

  // M017 酸 + 金属氧化物
  'q049': '除铁锈：Fe₂O₃ + HCl → FeCl₃ + H₂O。Fe 在 Fe₂O₃ 中是 +3 价，所以产物是 FeCl₃（不是 FeCl₂）。',
  'q050': 'CuO（黑）+ H₂SO₄ → CuSO₄（蓝）+ H₂O。颜色从黑到蓝是关键现象。',
  'q051': '稀盐酸"足量"=过量。反应后溶液中：FeCl₃（电离 Fe³⁺ 和 Cl⁻）+ 剩下的 HCl（电离 H⁺ 和 Cl⁻）。',

  // M018 中和反应
  'q052': '中和反应：酸+碱=盐+水。NaOH(1) + HCl(1) → NaCl + H₂O，1:1 配平。',
  'q053': 'Ca(OH)₂ 含 2 个 OH，H₂SO₄ 含 2 个 H。Ca:S = 1:1，水有几个？',
  'q054': '中和反应宏观：酸+碱=盐+水。微观本质：H⁺ 和 OH⁻ 结合成什么？',

  // M019 酸 + 盐
  'q055': '实验室制 CO₂：CaCO₃ + HCl → CaCl₂ + H₂O + CO₂↑。CaCO₃ 中 Ca 是 +2 价，所以盐是 CaCl₂。',
  'q056': '胃药小苏打 NaHCO₃ + 胃酸 HCl → NaCl + H₂O + CO₂↑。',
  'q057': '回忆口诀"含 CO₃²⁻ 或 HCO₃⁻ 的盐 + 酸 → CO₂↑"。AgNO₃+HCl 是沉淀（AgCl↓）不是气体。',

  // M020 碱 + 非金属氧化物
  'q058': 'NaOH 吸 CO₂——2NaOH(1) + CO₂(1) → Na₂CO₃ + H₂O。这就是 NaOH 变质的原因。',
  'q059': 'Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O。这个反应做什么用？现象是什么？',
  'q060': '"不属于四种基本反应类型" = 不是化合/分解/置换/复分解。逐项判断。碱+非金属氧化物属于哪类？',

  // M021 碱 + 盐
  'q061': 'NaOH + CuSO₄ → 蓝色沉淀（Cu(OH)₂↓）。配平：2 NaOH 配 1 CuSO₄。',
  'q062': 'NaOH + FeCl₃ → 红褐色沉淀（Fe(OH)₃↓）。配平：3 NaOH 配 1 FeCl₃。',
  'q063': 'Ca(OH)₂ + Na₂CO₃ → CaCO₃↓ + 2NaOH。CaCO₃ 不溶要写 ↓。这是工业制烧碱的方法。',

  // M022 盐 + 盐
  'q064': 'AgNO₃ + NaCl → AgCl↓（白色，不溶于稀硝酸）。这是检验 Cl⁻ 的方法。',
  'q065': 'BaCl₂ + Na₂SO₄ → BaSO₄↓（白色，不溶于稀硝酸）。这是检验 SO₄²⁻ 的方法。',
  'q066': '复分解条件：生成物有沉淀/气体/水。哪组反应物里有 Ag⁺/Ba²⁺/Cl⁻/SO₄²⁻ 等组合？',

  // M023 常见酸
  'q067': 'H 个数 = 酸根化合价的绝对值。SO₄ 是 −2 → 几个 H？',
  'q068': '盐酸 HCl（HCl 气体水溶液）；硝酸 HNO₃；碳酸 H₂CO₃；磷酸 H₃PO₄。看 H 的数量。',
  'q069': 'H₂R：设 R 为 x，H 是 +1，整体 0。(+1)×2 + x = 0 → x = ?',

  // M024 常见碱
  'q070': '氢氧化钠 = Na(+1) + OH(−1) = NaOH；氢氧化钙 = Ca(+2) + OH(−1) = Ca(OH)₂；氢氧化钾同理。',
  'q071': '碱的定义：电离出的阴离子全是 OH⁻ 的化合物。CaO 是不是碱？看它有没有 OH⁻。',
  'q072': '"亚"字代表低价。氢氧化亚铁 = +2 价铁 = Fe(OH)₂；氢氧化铁 = +3 价铁 = Fe(OH)₃；氢氧化铝 = Al +3。',

  // M025 常见盐
  'q073': '氯化钠 NaCl；碳酸钠 Na₂CO₃（纯碱）；碳酸钙 CaCO₃（大理石）。注意不要把 Na₂CO₃ 写成 NaCO₃。',
  'q074': '小苏打是碳酸氢钠。Na +1 配 HCO₃ −1 → 比例 1:1 → NaHCO₃。',
  'q075': '硫酸铜 CuSO₄；硝酸银 AgNO₃；硫酸钡 BaSO₄；氯化铵 NH₄Cl。注意配价和原子团括号规则。',

  // M026 常见氧化物
  'q076': '"二氧化 X" = 2 个氧 1 个 X。"五氧化二 X" = 5 个氧 2 个 X。看名字直接拆。',
  'q077': 'Fe₃O₄ 中铁的化合价不止 1 种。算一下：3x + (−2)×4 = 0 不对吧——其实是 +2 和 +3 混合存在。',
  'q078': '氧化铝 Al(+3) O(−2) → Al₂O₃；氧化镁 Mg(+2) O(−2) → MgO；氧化铜 → CuO；氧化银 → Ag₂O。',

  // M027 元素之最
  'q079': '地壳"氧硅铝铁钙"。最多的元素 ≠ 最多的金属。',
  'q080': '空气主要是 N₂（占 78%）→ 氮元素最多。海水/人体主要是 H₂O → 氧元素最多。',
  'q081': '形成化合物种类最多的元素，就是有机物的"骨架"——能成长链、能成环的那个。',

  // M028 金属之最
  'q082': '常温液态金属（熔点最低）= 汞 Hg。',
  'q083': '银导（电）热第一；铬硬度第一；钨熔点第一（白炽灯丝）。',
  'q084': '金的硬度其实很低（可被刻划）。最硬的是铬。',

  // M029 燃烧现象
  'q085': '镁 = 耀眼白光（信号弹）。其他选项是哪些反应的现象？硫蓝紫、铁火星四射、氢气淡蓝。',
  'q086': '红磷 = 大量白烟（P₂O₅ 固体颗粒）。区分"白烟"（固体）和"白雾"（液体）。',
  'q087': '木炭：空气红光，氧气白光。共同点：都生成 CO₂、都放热。',

  // M030 沉淀颜色
  'q088': '红褐色沉淀只有一个：Fe(OH)₃。蓝色是 Cu(OH)₂，AgCl/BaSO₄ 是白色。',
  'q089': '蓝色 = Cu(OH)₂；红褐色 = Fe(OH)₃；白色不溶酸 = AgCl 或 BaSO₄。',
  'q090': '哪个选项与 NaOH 反应不变化？NaCl + NaOH 互换得 NaCl + NaOH，无新物质——不反应。',

  // U001 催化剂
  'q091': '催化剂三句话："改变速率""自身质量不变""自身化学性质不变"。逐项核对。',
  'q092': 'MnO₂ 是 H₂O₂ 分解的催化剂——加快速率，但不改变产物总量。',
  'q093': '"一变两不变"——一变是反应速率；两不变是质量、化学性质。',

  // U002 质量守恒
  'q094': '质量守恒：4+8 = 6+? 解出 ? = ?',
  'q095': '"六不变两变两可能"——元素种类一定不变；分子种类一定变；原子数目不变。',
  'q096': '2H₂ + O₂ → 2H₂O 质量比 4:32:36。4g+32g 守恒得多少？',

  // X001 化合 vs 氧化
  'q097': '既化合又氧化 = 多变一 + 与 O₂ 反应。逐项查：A 一变多（分解）；B 多变一与 O₂；C 与 CuO 不是 O₂；D 没 O₂。',
  'q098': '氧化但不化合 = 与 O₂ 反应但产物≥2 种。CH₄ 燃烧是 2 种变 2 种——不是化合反应。',

  // X002 火焰颜色
  'q099': '硫在氧气中（不是空气）。空气淡蓝，氧气蓝紫——记口诀"空气淡蓝、氧气蓝紫"。',
  'q100': '"耀眼白光" = 镁。其他：铁火星四射（不是火焰）、硫蓝紫/淡蓝、氢气淡蓝。',

  // T001 复分解
  'q101': '复分解条件——生成物有沉淀/气/水。逐项看。CuSO₄+NaOH 生 Cu(OH)₂↓ 蓝色沉淀。',
  'q102': '共存=不反应。NaOH+HCl 中和；CaCl₂+Na₂CO₃ 生 CaCO₃↓；AgNO₃+NaCl 生 AgCl↓。',

  // T002 配制溶液
  'q103': '偏小=溶质少或溶剂多。逐项看："含杂质"导致 NaCl 实际偏少——选哪个？',
  'q104': '溶质 = 100×5% = ?；水 = 100−溶质 = ?；水的体积按 1g/mL 算。',

  // U003 复分解条件
  'q105': '复分解条件——生成物中要有"气/沉/水"中至少一个。看选项 B 的描述对不对。',
  'q106': '哪组反应后生成物全部可溶且无气无水？那就是不反应的那组。',
  'q107': '共存 = 不反应。看是否有 H⁺+CO₃²⁻、Ag⁺+Cl⁻、Ba²⁺+SO₄²⁻ 这些组合。',

  // U004 金属活动性应用
  'q108': '验证 3 种金属活动性——"金+盐+金"或"盐+金+盐"。Cu 放进 ZnSO₄——Cu 在 Zn 后，能反应吗？',
  'q109': 'K Ca Na 太活泼——加到盐溶液中先与水反应，不能用置换。所以 B 错。',
  'q110': '活动性 Zn>Fe>Ag。Fe 能置换 Ag 但不能置换 Zn。Zn(NO₃)₂ 不参与反应——所以？',

  // U005 溶解度
  'q111': '曲线上=饱和；曲线下=不饱和；曲线上方=饱和+析出；交点=两物质溶解度相等。',
  'q112': 'KNO₃ 溶解度随温升而升。原本饱和的升温后还是饱和吗？还能溶更多？',
  'q113': 'NaCl 溶解度受温度影响小——结晶用蒸发；KNO₃ 受温度影响大——用降温。提纯 NaCl 用？',

  // U006 浓硫酸
  'q114': '稀释口诀"酸入水，沿器壁，慢倒搅"。水入酸会怎样？记得密度差别。',
  'q115': '浓硫酸三性：脱水、吸水、强腐蚀。能干燥所有气体吗？想想 NH₃（碱性气体）。',
  'q116': '浓硫酸不能干燥碱性气体（NH₃）和强还原性气体（H₂S）。逐项排除。',

  // U007 pH
  'q117': 'pH < 7 酸性，= 7 中性，> 7 碱性。pH=3 落在哪？',
  'q118': '试纸润湿 = 加水稀释。酸性溶液加水，pH 是升还是降？向 7 靠近就是？',
  'q119': '酸雨定义：pH < 5.6。哪个选项 pH 小于 5.6？',

  // U008 酸的通性
  'q120': '酸的共性来自 H⁺。Cl⁻ 不决定酸性（NaCl 也含 Cl⁻ 但是盐）。',
  'q121': '与酸反应生成气体——金属（H₂）或碳酸盐（CO₂）。CuO 反应不生气；NaOH 中和不生气。',
  'q122': '与酸反应——金属（H 前）、金属氧化物、碱、盐。逐组找全能反应的那组。',

  // U009 碱的通性
  'q123': '碱性溶液——石蕊变蓝、酚酞变红。记口诀"碱里蓝蕊红酚酞"。',
  'q124': '2NaOH + CO₂ → Na₂CO₃ + H₂O。注意是 2 个 NaOH 配 1 个 CO₂。',
  'q125': 'Ca(OH)₂ 能反应：酸（HCl）、CO₂、可溶盐（Na₂CO₃→CaCO₃↓、CuSO₄→Cu(OH)₂↓）。CO 不与碱反应。',

  // U010 中和反应
  'q126': '中和反应宏观=酸+碱=盐+水。"实质"问的是微观——H⁺ 和 OH⁻ 结合成什么？',
  'q127': '严格中和=酸+碱（不是金属氧化物+酸）。CaO 是不是碱？',
  'q128': '加 NaOH 到 HCl——pH 从酸到中再到碱。中和反应放热——温度变化吗？',

  // U011 燃烧
  'q129': '燃烧三条件：可燃物、氧气、温度达着火点。缺一不可。',
  'q130': '红磷着火点 240℃。铜片上的温度（80℃左右）够烧白磷（40℃），不够烧红磷（240℃）。',
  'q131': '电器火灾不能用水（导电会触电）——这个是反例。其他三项原理对吗？',

  // U012 铁生锈
  'q132': '铁生锈条件——同时与 O₂ 和 H₂O 接触。注意：铜生锈还要 CO₂。',
  'q133': '三试管：A 有水有空气、B 煮沸+油（无氧）、C 干燥+空气（无水）。哪个生锈？',
  'q134': '防锈三法：保持干燥、形成保护层、改造金属。长泡水中——会怎样？',

  // U013 CO₂ 制取
  'q135': '实验室药品 = 大理石（CaCO₃）+ 稀盐酸。方程式必背。',
  'q136': '稀硫酸+CaCO₃ 会生 CaSO₄ 微溶——覆盖在 CaCO₃ 表面阻止反应。所以？',
  'q137': '验满：燃着木条放瓶口（看熄不熄）。检验：通入石灰水（看浑不浑）。',

  // U014 O₂ 制取
  'q138': '三种方法都对：H₂O₂分解、KMnO₄分解、KClO₃分解。逐个核对方程式。',
  'q139': '实验结束——先撤导管后熄火。如果反过来，水会倒吸进试管炸裂。',
  'q140': '"组查装定点收移熄"——组装、查气密性、装药、固定、点酒精灯、收集、移导管熄火。',

  // U015 过滤
  'q141': '"二低"= 滤纸边缘<漏斗、液面<滤纸边缘。看选项哪个反了。',
  'q142': '滤液浑浊三大原因：滤纸破、液面高于滤纸、烧杯不干净。其他选项是正确操作。',
  'q143': '玻璃棒：溶解→搅拌；过滤→引流；蒸发→搅拌防飞溅。三个不同作用。',

  // U016 微观粒子
  'q144': '由分子构成：H₂O、CO₂等；由原子构成：金属、稀有气体、金刚石；由离子构成：NaCl、CuSO₄。',
  'q145': '"保持化学性质的最小粒子"——由分子构成的就是分子；由原子构成的就是原子。水由什么构成？',
  'q146': '化学变化：分子可分（拆成原子），原子重组（成新分子）。原子是化学变化最小粒子。',

  // U017 元素
  'q147': '元素定义关键字——"质子数（核电荷数）相同的一类原子的总称"。',
  'q148': '元素是宏观概念，只讲种类不讲个数（描述"组成"）。原子是微观概念。',
  'q149': '反应前后六不变："元素种类、原子种类、原子数目、原子质量、总质量、元素质量"。',

  // U018 原子结构
  'q150': '核电荷数 = 质子数 = 核外电子数（原子不显电性）。中子数和质子数没必然关系。',
  'q151': '原子核 = 质子 + 中子（特例：氢原子无中子）。',
  'q152': '相对原子质量 ≈ 质子数 + 中子数。中子 = 39 − 19 = ?',

  // U019 最外层
  'q153': '决定化学性质的是最外层电子数。金属<4 易失，非金属≥4 易得。',
  'q154': '最稳定 = 最外层 8（He 例外是 2）= 稀有气体。',
  'q155': '核电荷数 12（镁 Mg），最外层 2 < 4 → 金属，易失 2 电子形成 Mg²⁺。',

  // U020 溶质质量分数
  'q156': '公式：溶质 / 溶液 × 100%。注意分母是"溶液"不是"溶剂"。',
  'q157': '饱和溶液公式 = S/(100+S) × 100%。代入 S=36：36/(100+36) ≈ ?',
  'q158': '稀释——溶质质量不变。原溶质 = 100×20% = ?；新溶液质量 = 溶质/8% = ?；加水 = 新-原。',

  // U021 配制误差
  'q159': '偏小 = 实际溶质少或溶剂多。"NaCl 含杂质" → 实际 NaCl 偏少 → 偏小。',
  'q160': '"仰大俯小"是说实际值。量水俯视 → 读数偏高（实际偏少）→ 水少 → 浓度偏大。',
  'q161': '稀释偏差：仰视量浓溶液=取多了（偏大）；俯视量水=水少（偏大）；浓溶液洒了=偏小。',

  // U022 离子检验
  'q162': '检验 CO₃²⁻ 两步：加酸生气 + 气体通石灰水变浑浊。缺一不可。',
  'q163': '区分 Cl⁻ 和 SO₄²⁻——用 Ba(NO₃)₂（不用 BaCl₂，会引入 Cl⁻）。',
  'q164': '检验顺序——先排 CO₃²⁻（加酸看气），再 SO₄²⁻（加 Ba），最后 Cl⁻（加 Ag）。',

  // U023 化肥
  'q165': '氮肥含 N，磷肥含 P，钾肥含 K。NH₄Cl 含什么元素？',
  'q166': '铵态氮肥（含 NH₄⁺）+ 碱 → NH₃↑ 肥效降低。熟石灰是碱性。',
  'q167': '三步鉴别：颜色溶解性 → 加碱闻味 → 阴离子检验。三个方法配合。',

  // U024 化石能源
  'q168': '三大化石能源：煤、石油、天然气（不可再生）。氢能、太阳能等是新能源。',
  'q169': '可再生：太阳能、风能、水能、地热。化石能源都不可再生。',
  'q170': '化石能源燃烧产 SO₂、NO₂、CO₂ 等——污染环境。"不污染"说法肯定错。',

  // U025 物质分类
  'q171': '氧化物 = 2 种元素 + 含氧。O₂ 单质；KMnO₄ 3 种元素；Fe₃O₄ 是 Fe+O 2 种 ✓；NaOH 3 种。',
  'q172': '空气、海水是混合物。CaO（Ca+O）、Fe₂O₃（Fe+O）都是 2 元素含氧——氧化物。',
  'q173': 'H₃BO₃ 含 H、B、O 三种元素——是化合物但不是氧化物（氧化物只能 2 种）。',

  // U026 反应类型
  'q174': '化合 = 多变一。逐项看哪个是 2 种生成 1 种。',
  'q175': '"不属于四种基本类型"——碱+非金属氧化物（如 NaOH+CO₂）就是经典例外。',
  'q176': '置换反应必有单质参加和生成（A+BC→AC+B 中 A、B 是单质）。',

  // U027 溶液
  'q177': '溶液三特征：均一、稳定、混合物。其他选项哪些是错的（无色？纯液体？）',
  'q178': '空气是气态溶液，合金是固态溶液——溶液不一定是液体。',
  'q179': '蒸馏水是纯净物（一种 H₂O），不是混合物——所以不是溶液。',

  // U028 饱和浓稀
  'q180': '饱和必须针对"某种"溶质。饱和的 NaCl 还能溶 KNO₃。',
  'q181': '浓稀和饱和不饱和无必然关系。石灰水是稀的饱和溶液——典型例子。',
  'q182': '判断饱和需要知道该温度的溶解度。题目给了温度具体数值吗？没给就无法判断。',

  // U029 工业炼铁
  'q183': '主反应 3CO + Fe₂O₃ → 2Fe + 3CO₂。配平：Fe 2 个、O 数对齐。',
  'q184': '石灰石 = CaCO₃，高温分解生 CaO，CaO + SiO₂ → CaSiO₃ 炉渣（除杂）。',
  'q185': '先算纯 Fe₂O₃ 质量（100×80%=80t）。再用比例：160 g Fe₂O₃ 产 112g Fe。算 Fe。',

  // U030 除杂
  'q186': '除杂三原则：不引新杂、不减少原物质、过程简便。逐项看。',
  'q187': 'Cu 中除 Fe——加稀盐酸（Fe 反应消失，Cu 不动）。或加 CuSO₄（Fe→Cu，但增重）。',
  'q188': '除 CO₂ 中混的 HCl——不能用 NaOH（同时吸 CO₂）。要用饱和 NaHCO₃（吸 HCl 不吸 CO₂）。'
};
