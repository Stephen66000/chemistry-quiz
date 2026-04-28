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

  // ===================== 必懂类（4 KP 样题保留）=====================
  { id: 'U001', category: '必懂', unit: 2, title: '催化剂（一变两不变）', desc: '改变反应速率，自身质量和化学性质不变' },
  { id: 'U002', category: '必懂', unit: 5, title: '质量守恒定律', desc: '反应前后元素/原子种类、数目、质量都不变' },

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
    explanation: '判断各反应类型：\n• A：NaOH（碱）+ CO₂（非金属氧化物）→ Na₂CO₃ + H₂O\n  这是 "碱+非金属氧化物" 反应——**不属于四种基本反应类型** ✓\n• B：CaCO₃（盐）+ HCl（酸）→ 互换成分 → 复分解反应\n• C：Fe（单质）+ CuSO₄（化合物）→ 单换单 → 置换反应\n• D：2 种 → 1 种 → 化合反应\n\n💡 "不属于四种基本反应类型"的常见反应：\n① 碱 + 非金属氧化物（NaOH+CO₂、Ca(OH)₂+CO₂）\n② 酸 + 金属氧化物 → 实际属于复分解\n③ CO 还原氧化物（CO+CuO→Cu+CO₂）',
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
    explanation: '正确：Ca(OH)₂ + Na₂CO₃ = CaCO₃↓ + 2NaOH\n\n• A 正确 ✓（CaCO₃ 不溶于水，要写 ↓）\n• B 错：CaCO₃ 是沉淀，必须写 ↓\n• C 错：Ca(CO₃)₂ 不存在（钙是 +2 价，CO₃²⁻ 是 −2 价）\n• D 错：常温下不会分解\n\n💡 工业制 NaOH 两种方法：① 此反应 ② 电解食盐水（中考不常考）。',
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
    explanation: '复分解反应条件：生成物中**有沉淀↓、气体↑或水**。\n\n• A：交换得 NaNO₃ + KCl，全部可溶，无气/沉/水 → **不反应**\n• B：交换得 Na₂Cl + K₂SO₄……Na₂Cl 错，应是 NaCl + K₂SO₄，全部可溶，**不反应**\n• C：CaCl₂ + 2AgNO₃ = **2AgCl↓** + Ca(NO₃)₂，生成白色沉淀 ✓\n• D：交换得 K₂Cl 错，应是 KCl + Na₂CO₃，全部可溶，**不反应**\n\n答案 C。\n\n💡 盐+盐反应记忆：必须有 Ag⁺/Ba²⁺/Cl⁻/SO₄²⁻/CO₃²⁻ 等组合产生沉淀。',
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
  }
];

// ============================================================
// 第一批统计
// ============================================================
// 必背类：30 KP × 3 题 = 90 题（M001-M030）
// 必懂类：2 KP × 3 题 = 6 题（U001/U002 样题）
// 易混类：2 KP × 2 题 = 4 题（X001/X002 样题）
// TOP20： 2 KP × 2 题 = 4 题（T001/T002 样题）
// 共：104 题，覆盖 36 个知识点
// 后续批次：必懂 28 KP / 易混 23 KP / TOP20 18 KP
// ============================================================
