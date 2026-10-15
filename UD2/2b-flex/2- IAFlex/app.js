/**
 * CSS Flexbox Lab - Lógica Interactiva
 */

document.addEventListener('DOMContentLoaded', () => {
  initAxisExplainer();
  initMiniPlaygrounds();
  initItemsDashboard();
  initSandbox();
  initChallenges();
  initClipboardToasts();
});

/* ==========================================================================
   UTILIDADES
   ========================================================================== */
function showToast(message = '¡Copiado al portapapeles! 📋') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => showToast());
  } else {
    // Fallback
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast();
    } catch (err) {
      console.error('Error al copiar:', err);
    }
    document.body.removeChild(textArea);
  }
}

/* ==========================================================================
   01. DIAGRAMA DE EJES INTERACTIVO
   ========================================================================== */
function initAxisExplainer() {
  const btns = document.querySelectorAll('#axis-direction-btns .chip-btn');
  const preview = document.getElementById('axis-preview-container');
  const mainAxis = document.getElementById('main-axis-indicator');
  const crossAxis = document.getElementById('cross-axis-indicator');
  const mainLabel = document.getElementById('main-axis-label');
  const crossLabel = document.getElementById('cross-axis-label');

  if (!btns.length || !preview) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const dir = btn.dataset.dir;
      preview.style.flexDirection = dir;

      // Actualizar indicadores visuales de ejes
      if (dir === 'row') {
        preview.style.width = '100%';
        preview.style.maxWidth = '450px';
        preview.style.height = 'auto';

        mainAxis.style.top = '12px';
        mainAxis.style.bottom = 'auto';
        mainAxis.style.left = '20px';
        mainAxis.style.right = '20px';
        mainAxis.style.height = '26px';
        mainAxis.style.width = 'auto';
        mainAxis.style.borderBottom = '2px solid #38bdf8';
        mainAxis.style.borderRight = 'none';
        mainAxis.style.writingMode = 'horizontal-tb';
        mainLabel.textContent = 'Eje Principal (Main Axis) ➔';

        crossAxis.style.top = '40px';
        crossAxis.style.bottom = '20px';
        crossAxis.style.left = '10px';
        crossAxis.style.right = 'auto';
        crossAxis.style.width = '26px';
        crossAxis.style.height = 'auto';
        crossAxis.style.borderRight = '2px solid #f472b6';
        crossAxis.style.borderBottom = 'none';
        crossAxis.style.writingMode = 'vertical-rl';
        crossLabel.textContent = 'Eje Cruzado (Cross Axis) ➔';
      } else if (dir === 'row-reverse') {
        preview.style.width = '100%';
        preview.style.maxWidth = '450px';
        preview.style.height = 'auto';

        mainAxis.style.top = '12px';
        mainAxis.style.bottom = 'auto';
        mainAxis.style.left = '20px';
        mainAxis.style.right = '20px';
        mainAxis.style.height = '26px';
        mainAxis.style.width = 'auto';
        mainAxis.style.borderBottom = '2px solid #38bdf8';
        mainAxis.style.borderRight = 'none';
        mainAxis.style.writingMode = 'horizontal-tb';
        mainLabel.textContent = '⬅ Eje Principal (Main Axis - Invertido)';

        crossAxis.style.top = '40px';
        crossAxis.style.bottom = '20px';
        crossAxis.style.left = '10px';
        crossAxis.style.right = 'auto';
        crossAxis.style.width = '26px';
        crossAxis.style.height = 'auto';
        crossAxis.style.borderRight = '2px solid #f472b6';
        crossAxis.style.borderBottom = 'none';
        crossAxis.style.writingMode = 'vertical-rl';
        crossLabel.textContent = 'Eje Cruzado (Cross Axis) ➔';
      } else if (dir === 'column') {
        preview.style.width = '120px';
        preview.style.height = '240px';

        mainAxis.style.top = '40px';
        mainAxis.style.bottom = '20px';
        mainAxis.style.left = '10px';
        mainAxis.style.right = 'auto';
        mainAxis.style.width = '26px';
        mainAxis.style.height = 'auto';
        mainAxis.style.borderRight = '2px solid #38bdf8';
        mainAxis.style.borderBottom = 'none';
        mainAxis.style.writingMode = 'vertical-rl';
        mainLabel.textContent = 'Eje Principal (Main Axis) ⬇';

        crossAxis.style.top = '12px';
        crossAxis.style.bottom = 'auto';
        crossAxis.style.left = '45px';
        crossAxis.style.right = '20px';
        crossAxis.style.height = '26px';
        crossAxis.style.width = 'auto';
        crossAxis.style.borderBottom = '2px solid #f472b6';
        crossAxis.style.borderRight = 'none';
        crossAxis.style.writingMode = 'horizontal-tb';
        crossLabel.textContent = 'Eje Cruzado (Cross Axis) ➔';
      } else if (dir === 'column-reverse') {
        preview.style.width = '120px';
        preview.style.height = '240px';

        mainAxis.style.top = '40px';
        mainAxis.style.bottom = '20px';
        mainAxis.style.left = '10px';
        mainAxis.style.right = 'auto';
        mainAxis.style.width = '26px';
        mainAxis.style.height = 'auto';
        mainAxis.style.borderRight = '2px solid #38bdf8';
        mainAxis.style.borderBottom = 'none';
        mainAxis.style.writingMode = 'vertical-rl';
        mainLabel.textContent = '⬆ Eje Principal (Main Axis - Invertido)';

        crossAxis.style.top = '12px';
        crossAxis.style.bottom = 'auto';
        crossAxis.style.left = '45px';
        crossAxis.style.right = '20px';
        crossAxis.style.height = '26px';
        crossAxis.style.width = 'auto';
        crossAxis.style.borderBottom = '2px solid #f472b6';
        crossAxis.style.borderRight = 'none';
        crossAxis.style.writingMode = 'horizontal-tb';
        crossLabel.textContent = 'Eje Cruzado (Cross Axis) ➔';
      }
    });
  });
}

/* ==========================================================================
   02. MINI-PLAYGROUNDS DEL CONTENEDOR
   ========================================================================== */
function initMiniPlaygrounds() {
  // Manejador genérico para chip-row con data-target y data-prop
  document.querySelectorAll('.chip-row[data-target]').forEach(row => {
    const targetId = row.dataset.target;
    const prop = row.dataset.prop;
    const targetEl = document.getElementById(targetId);
    const codeEl = document.getElementById(targetId.replace('demo-', 'code-'));

    row.querySelectorAll('.chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        row.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const val = btn.dataset.val;
        if (targetEl) {
          targetEl.style[prop] = val;
        }
        if (codeEl) {
          // Convert camelCase prop to kebab-case
          const cssProp = prop.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
          codeEl.textContent = `${cssProp}: ${val};`;
        }
      });
    });
  });

  // Especial: flex-wrap & align-content combinados
  const demoWrap = document.getElementById('demo-wrap');
  const codeWrap = document.getElementById('code-wrap');
  let currentWrap = 'wrap';
  let currentAlignContent = 'stretch';

  document.querySelectorAll('#wrap-choice-btns .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#wrap-choice-btns .chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentWrap = btn.dataset.val;
      updateWrapDemo();
    });
  });

  document.querySelectorAll('#align-content-choice-btns .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#align-content-choice-btns .chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAlignContent = btn.dataset.val;
      updateWrapDemo();
    });
  });

  function updateWrapDemo() {
    if (demoWrap) {
      demoWrap.style.flexWrap = currentWrap;
      demoWrap.style.alignContent = currentAlignContent;
    }
    if (codeWrap) {
      codeWrap.textContent = `flex-wrap: ${currentWrap}; align-content: ${currentAlignContent};`;
    }
  }

  // Especial: Slider de gap
  const gapSlider = document.getElementById('gap-slider');
  const gapValDisplay = document.getElementById('gap-val-display');
  const demoGap = document.getElementById('demo-gap');
  const codeGap = document.getElementById('code-gap');

  if (gapSlider && demoGap) {
    gapSlider.addEventListener('input', (e) => {
      const val = `${e.target.value}px`;
      gapValDisplay.textContent = val;
      demoGap.style.gap = val;
      if (codeGap) {
        codeGap.textContent = `gap: ${val};`;
      }
    });
  }
}

/* ==========================================================================
   03. PROPIEDADES DE LOS ITEMS (FLEX ITEMS)
   ========================================================================== */
function initItemsDashboard() {
  const itemStates = {
    1: { grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0 },
    2: { grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0 },
    3: { grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0 }
  };

  let activeItem = 1;

  // Elementos UI
  const tabBtns = document.querySelectorAll('#item-tabs .item-tab-btn');
  const titleEl = document.getElementById('selected-item-title');
  const codeCss = document.getElementById('code-item-css');
  const btnCopy = document.getElementById('btn-copy-item-css');

  // Controles
  const sliderGrow = document.getElementById('slider-grow');
  const valGrow = document.getElementById('val-grow');
  const sliderShrink = document.getElementById('slider-shrink');
  const valShrink = document.getElementById('val-shrink');
  const basisChips = document.querySelectorAll('#basis-chips .chip-btn');
  const valBasis = document.getElementById('val-basis');
  const alignSelfChips = document.querySelectorAll('#align-self-chips .chip-btn');
  const sliderOrder = document.getElementById('slider-order');
  const valOrder = document.getElementById('val-order');

  function updateItemUI() {
    const state = itemStates[activeItem];

    // Título
    const colors = { 1: 'Azul', 2: 'Violeta', 3: 'Verde' };
    if (titleEl) titleEl.textContent = `Editando: Elemento ${activeItem} (${colors[activeItem]})`;

    // Sliders & Badges
    sliderGrow.value = state.grow;
    valGrow.textContent = state.grow;

    sliderShrink.value = state.shrink;
    valShrink.textContent = state.shrink;

    valBasis.textContent = state.basis;
    basisChips.forEach(c => {
      c.classList.toggle('active', c.dataset.basis === state.basis);
    });

    alignSelfChips.forEach(c => {
      c.classList.toggle('active', c.dataset.self === state.alignSelf);
    });

    sliderOrder.value = state.order;
    valOrder.textContent = state.order;

    // Aplicar estilos al elemento físico
    const itemEl = document.getElementById(`custom-item-${activeItem}`);
    if (itemEl) {
      itemEl.style.flexGrow = state.grow;
      itemEl.style.flexShrink = state.shrink;
      itemEl.style.flexBasis = state.basis;
      itemEl.style.alignSelf = state.alignSelf;
      itemEl.style.order = state.order;

      const metaEl = document.getElementById(`meta-${activeItem}`);
      if (metaEl) {
        metaEl.textContent = `grow:${state.grow} | order:${state.order}`;
      }
    }

    // Actualizar selección visual
    document.querySelectorAll('.flex-item-custom').forEach(el => el.classList.remove('selected'));
    if (itemEl) itemEl.classList.add('selected');

    // Actualizar Snippet CSS
    if (codeCss) {
      codeCss.textContent = `.item-${activeItem} {
  flex-grow: ${state.grow};
  flex-shrink: ${state.shrink};
  flex-basis: ${state.basis};
  align-self: ${state.alignSelf};
  order: ${state.order};
}`;
    }
  }

  // Selección por Tabs
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeItem = parseInt(btn.dataset.item, 10);
      updateItemUI();
    });
  });

  // Selección directa haciendo click en los items de la caja
  document.querySelectorAll('.flex-item-custom').forEach(itemEl => {
    itemEl.addEventListener('click', () => {
      const id = itemEl.id.replace('custom-item-', '');
      activeItem = parseInt(id, 10);
      tabBtns.forEach(b => b.classList.toggle('active', b.dataset.item === id));
      updateItemUI();
    });
  });

  // Listeners de controles
  sliderGrow.addEventListener('input', (e) => {
    itemStates[activeItem].grow = e.target.value;
    updateItemUI();
  });

  sliderShrink.addEventListener('input', (e) => {
    itemStates[activeItem].shrink = e.target.value;
    updateItemUI();
  });

  basisChips.forEach(chip => {
    chip.addEventListener('click', () => {
      itemStates[activeItem].basis = chip.dataset.basis;
      updateItemUI();
    });
  });

  alignSelfChips.forEach(chip => {
    chip.addEventListener('click', () => {
      itemStates[activeItem].alignSelf = chip.dataset.self;
      updateItemUI();
    });
  });

  sliderOrder.addEventListener('input', (e) => {
    itemStates[activeItem].order = e.target.value;
    updateItemUI();
  });

  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      if (codeCss) copyToClipboard(codeCss.textContent);
    });
  }

  // Inicializar estado inicial
  updateItemUI();
}

/* ==========================================================================
   04. EL GRAN LABORATORIO VIVO (SANDBOX TOTAL)
   ========================================================================== */
function initSandbox() {
  const canvas = document.getElementById('sandbox-canvas');
  const codeOutput = document.getElementById('sandbox-css-output');
  const btnCopy = document.getElementById('btn-copy-sandbox-css');
  const btnReset = document.getElementById('btn-reset-sandbox');
  const btnAdd = document.getElementById('sb-add-item');
  const btnRemove = document.getElementById('sb-remove-item');

  // Controles contenedor
  const selDirection = document.getElementById('sb-direction');
  const selJustify = document.getElementById('sb-justify');
  const selAlignItems = document.getElementById('sb-align-items');
  const selWrap = document.getElementById('sb-wrap');
  const selAlignContent = document.getElementById('sb-align-content');
  const sliderGap = document.getElementById('sb-gap');
  const gapVal = document.getElementById('sb-gap-val');

  // Controles ítem activo
  const activeItemName = document.getElementById('sb-active-item-name');
  const sliderItemGrow = document.getElementById('sb-item-grow');
  const itemGrowVal = document.getElementById('sb-item-grow-val');
  const sliderItemShrink = document.getElementById('sb-item-shrink');
  const itemShrinkVal = document.getElementById('sb-item-shrink-val');
  const selItemAlignSelf = document.getElementById('sb-item-align-self');
  const sliderItemOrder = document.getElementById('sb-item-order');
  const itemOrderVal = document.getElementById('sb-item-order-val');

  let itemsData = [
    { id: 1, grow: 0, shrink: 1, alignSelf: 'auto', order: 0, color: 'var(--item-c1)' },
    { id: 2, grow: 0, shrink: 1, alignSelf: 'auto', order: 0, color: 'var(--item-c2)' },
    { id: 3, grow: 0, shrink: 1, alignSelf: 'auto', order: 0, color: 'var(--item-c3)' },
    { id: 4, grow: 0, shrink: 1, alignSelf: 'auto', order: 0, color: 'var(--item-c4)' }
  ];

  let selectedItemId = 1;

  function renderSandboxItems() {
    canvas.innerHTML = '';
    itemsData.forEach(item => {
      const el = document.createElement('div');
      el.className = `sb-item ${item.id === selectedItemId ? 'active' : ''}`;
      el.style.backgroundColor = item.color;
      el.style.flexGrow = item.grow;
      el.style.flexShrink = item.shrink;
      el.style.alignSelf = item.alignSelf;
      el.style.order = item.order;

      el.innerHTML = `
        <span class="sb-item-num">#${item.id}</span>
        <span class="sb-item-sub">g:${item.grow} | o:${item.order}</span>
      `;

      el.addEventListener('click', () => {
        selectedItemId = item.id;
        renderSandboxItems();
        syncActiveItemControls();
      });

      canvas.appendChild(el);
    });

    updateSandboxCSSOutput();
  }

  function applyContainerStyles() {
    canvas.style.flexDirection = selDirection.value;
    canvas.style.justifyContent = selJustify.value;
    canvas.style.alignItems = selAlignItems.value;
    canvas.style.flexWrap = selWrap.value;
    canvas.style.alignContent = selAlignContent.value;
    canvas.style.gap = `${sliderGap.value}px`;
    gapVal.textContent = `${sliderGap.value}px`;

    updateSandboxCSSOutput();
  }

  function syncActiveItemControls() {
    const item = itemsData.find(i => i.id === selectedItemId);
    if (!item) return;

    activeItemName.textContent = `#${item.id}`;
    sliderItemGrow.value = item.grow;
    itemGrowVal.textContent = item.grow;
    sliderItemShrink.value = item.shrink;
    itemShrinkVal.textContent = item.shrink;
    selItemAlignSelf.value = item.alignSelf;
    sliderItemOrder.value = item.order;
    itemOrderVal.textContent = item.order;
  }

  function updateSandboxCSSOutput() {
    let css = `.container {
  display: flex;
  flex-direction: ${selDirection.value};
  justify-content: ${selJustify.value};
  align-items: ${selAlignItems.value};
  flex-wrap: ${selWrap.value};
  align-content: ${selAlignContent.value};
  gap: ${sliderGap.value}px;
}`;

    // Incluir estilos de items personalizados
    itemsData.forEach(i => {
      if (i.grow > 0 || i.shrink !== 1 || i.alignSelf !== 'auto' || i.order !== 0) {
        css += `\n\n.item-${i.id} {
  ${i.grow > 0 ? `flex-grow: ${i.grow};\n  ` : ''}${i.shrink !== 1 ? `flex-shrink: ${i.shrink};\n  ` : ''}${i.alignSelf !== 'auto' ? `align-self: ${i.alignSelf};\n  ` : ''}${i.order !== 0 ? `order: ${i.order};\n  ` : ''}}`.replace(/\n\s*}/, '\n}');
      }
    });

    if (codeOutput) codeOutput.textContent = css;
  }

  // Eventos de controles de contenedor
  [selDirection, selJustify, selAlignItems, selWrap, selAlignContent].forEach(sel => {
    sel.addEventListener('change', applyContainerStyles);
  });
  sliderGap.addEventListener('input', applyContainerStyles);

  // Eventos controles de ítem
  sliderItemGrow.addEventListener('input', (e) => {
    const item = itemsData.find(i => i.id === selectedItemId);
    if (item) {
      item.grow = parseInt(e.target.value, 10);
      itemGrowVal.textContent = item.grow;
      renderSandboxItems();
    }
  });

  sliderItemShrink.addEventListener('input', (e) => {
    const item = itemsData.find(i => i.id === selectedItemId);
    if (item) {
      item.shrink = parseInt(e.target.value, 10);
      itemShrinkVal.textContent = item.shrink;
      renderSandboxItems();
    }
  });

  selItemAlignSelf.addEventListener('change', (e) => {
    const item = itemsData.find(i => i.id === selectedItemId);
    if (item) {
      item.alignSelf = e.target.value;
      renderSandboxItems();
    }
  });

  sliderItemOrder.addEventListener('input', (e) => {
    const item = itemsData.find(i => i.id === selectedItemId);
    if (item) {
      item.order = parseInt(e.target.value, 10);
      itemOrderVal.textContent = item.order;
      renderSandboxItems();
    }
  });

  // Añadir / Quitar items
  btnAdd.addEventListener('click', () => {
    if (itemsData.length >= 10) {
      showToast('Límite de 10 elementos alcanzado');
      return;
    }
    const colors = ['var(--item-c1)', 'var(--item-c2)', 'var(--item-c3)', 'var(--item-c4)', 'var(--item-c5)', 'var(--item-c6)'];
    const newId = itemsData.length ? Math.max(...itemsData.map(i => i.id)) + 1 : 1;
    itemsData.push({
      id: newId,
      grow: 0,
      shrink: 1,
      alignSelf: 'auto',
      order: 0,
      color: colors[(newId - 1) % colors.length]
    });
    renderSandboxItems();
  });

  btnRemove.addEventListener('click', () => {
    if (itemsData.length <= 1) {
      showToast('Debe haber al menos 1 elemento');
      return;
    }
    itemsData.pop();
    if (!itemsData.some(i => i.id === selectedItemId)) {
      selectedItemId = itemsData[0].id;
      syncActiveItemControls();
    }
    renderSandboxItems();
  });

  // Reset
  btnReset.addEventListener('click', () => {
    selDirection.value = 'row';
    selJustify.value = 'flex-start';
    selAlignItems.value = 'stretch';
    selWrap.value = 'nowrap';
    selAlignContent.value = 'stretch';
    sliderGap.value = 12;

    itemsData = [
      { id: 1, grow: 0, shrink: 1, alignSelf: 'auto', order: 0, color: 'var(--item-c1)' },
      { id: 2, grow: 0, shrink: 1, alignSelf: 'auto', order: 0, color: 'var(--item-c2)' },
      { id: 3, grow: 0, shrink: 1, alignSelf: 'auto', order: 0, color: 'var(--item-c3)' },
      { id: 4, grow: 0, shrink: 1, alignSelf: 'auto', order: 0, color: 'var(--item-c4)' }
    ];
    selectedItemId = 1;

    applyContainerStyles();
    syncActiveItemControls();
    renderSandboxItems();
    showToast('Sandbox restablecido a valores por defecto ✨');
  });

  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      if (codeOutput) copyToClipboard(codeOutput.textContent);
    });
  }

  // Inicio
  applyContainerStyles();
  syncActiveItemControls();
  renderSandboxItems();
}

/* ==========================================================================
   05. RETOS Y DESAFÍOS INTERACTIVOS
   ========================================================================== */
function initChallenges() {
  const challenges = {
    1: {
      title: "Reto 1: El Santo Grial del Centrado",
      desc: "Centra el corazón exactamente en medio de la pantalla (tanto horizontal como verticalmente) usando las dos propiedades clave de alineación.",
      init() {
        return {
          html: `<div class="target-center-spot"></div><div class="ch-heart" id="ch-heart">❤️</div>`,
          controls: `
            <div class="form-row">
              <label>justify-content:</label>
              <select id="ch-ctl-justify" class="custom-select">
                <option value="flex-start" selected>flex-start</option>
                <option value="center">center</option>
                <option value="flex-end">flex-end</option>
                <option value="space-between">space-between</option>
              </select>
            </div>
            <div class="form-row">
              <label>align-items:</label>
              <select id="ch-ctl-align" class="custom-select">
                <option value="stretch" selected>stretch</option>
                <option value="flex-start">flex-start</option>
                <option value="center">center</option>
                <option value="flex-end">flex-end</option>
              </select>
            </div>
          `,
          check: (stage) => {
            const jc = stage.style.justifyContent;
            const ai = stage.style.alignItems;
            return jc === 'center' && ai === 'center';
          },
          solution: {
            justifyContent: 'center',
            alignItems: 'center',
            hint: '💡 Pista: Para centrar en ambos ejes necesitas justify-content: center y align-items: center.'
          }
        };
      }
    },
    2: {
      title: "Reto 2: Barra de Navegación Profesional",
      desc: "Distribuye el logotipo a la extrema izquierda y los enlaces de navegación a la extrema derecha, asegurando que ambos queden perfectamente alineados en el centro vertical.",
      init() {
        return {
          html: `
            <div class="nav-demo-bar" id="ch-navbar" style="width: 100%;">
              <div class="nav-demo-logo">🚀 MiApp</div>
              <div class="nav-demo-links">
                <span>Inicio</span>
                <span>Precios</span>
                <span>Contacto</span>
              </div>
            </div>
          `,
          controls: `
            <div class="form-row">
              <label>justify-content:</label>
              <select id="ch-ctl-justify" class="custom-select">
                <option value="flex-start" selected>flex-start</option>
                <option value="center">center</option>
                <option value="flex-end">flex-end</option>
                <option value="space-between">space-between</option>
              </select>
            </div>
            <div class="form-row">
              <label>align-items:</label>
              <select id="ch-ctl-align" class="custom-select">
                <option value="stretch" selected>stretch</option>
                <option value="flex-start">flex-start</option>
                <option value="center">center</option>
                <option value="flex-end">flex-end</option>
              </select>
            </div>
          `,
          check: (stage) => {
            const navbar = document.getElementById('ch-navbar');
            return navbar.style.justifyContent === 'space-between' && navbar.style.alignItems === 'center';
          },
          applyToNavbar: true,
          solution: {
            justifyContent: 'space-between',
            alignItems: 'center',
            hint: '💡 Pista: Usa justify-content: space-between para separar extremos y align-items: center para centrar en vertical.'
          }
        };
      }
    },
    3: {
      title: "Reto 3: Cuadrícula de Tarjetas Responsiva",
      desc: "Las tarjetas no caben en una sola fila. Haz que salten de línea automáticamente cuando lleguen al borde y que tengan una separación estética uniforme de 16px.",
      init() {
        return {
          html: `
            <div class="card-demo-wrap" id="ch-card-wrap">
              <div class="card-sample">Tarjeta 1</div>
              <div class="card-sample">Tarjeta 2</div>
              <div class="card-sample">Tarjeta 3</div>
              <div class="card-sample">Tarjeta 4</div>
              <div class="card-sample">Tarjeta 5</div>
            </div>
          `,
          controls: `
            <div class="form-row">
              <label>flex-wrap:</label>
              <select id="ch-ctl-wrap" class="custom-select">
                <option value="nowrap" selected>nowrap</option>
                <option value="wrap">wrap</option>
                <option value="wrap-reverse">wrap-reverse</option>
              </select>
            </div>
            <div class="form-row">
              <label>gap:</label>
              <select id="ch-ctl-gap" class="custom-select">
                <option value="0px" selected>0px</option>
                <option value="8px">8px</option>
                <option value="16px">16px</option>
                <option value="32px">32px</option>
              </select>
            </div>
          `,
          check: (stage) => {
            const cardWrap = document.getElementById('ch-card-wrap');
            return cardWrap.style.flexWrap === 'wrap' && cardWrap.style.gap === '16px';
          },
          applyToCardWrap: true,
          solution: {
            flexWrap: 'wrap',
            gap: '16px',
            hint: '💡 Pista: Configura flex-wrap: wrap y un gap: 16px para un espaciado equilibrado.'
          }
        };
      }
    }
  };

  let activeChallenge = 1;
  const tabs = document.querySelectorAll('.challenges-tabs .challenge-tab');
  const titleEl = document.getElementById('ch-title');
  const descEl = document.getElementById('ch-desc');
  const controlsEl = document.getElementById('ch-controls');
  const stageEl = document.getElementById('ch-stage');
  const feedbackEl = document.getElementById('ch-feedback');
  const btnVerify = document.getElementById('btn-verify-challenge');
  const btnSolution = document.getElementById('btn-solution-challenge');

  function loadChallenge(num) {
    activeChallenge = num;
    const ch = challenges[num];
    const data = ch.init();

    titleEl.textContent = ch.title;
    descEl.textContent = ch.desc;
    controlsEl.innerHTML = data.controls;
    stageEl.innerHTML = data.html;

    feedbackEl.className = 'challenge-feedback';
    feedbackEl.innerHTML = '<span class="status-msg">Selecciona las propiedades correctas...</span>';

    // Resetear estilos previos en stage
    stageEl.style.justifyContent = 'flex-start';
    stageEl.style.alignItems = 'stretch';
    stageEl.style.flexWrap = 'nowrap';
    stageEl.style.gap = '0px';

    // Vincular controles dinámicos con el stage
    const selJustify = document.getElementById('ch-ctl-justify');
    const selAlign = document.getElementById('ch-ctl-align');
    const selWrap = document.getElementById('ch-ctl-wrap');
    const selGap = document.getElementById('ch-ctl-gap');

    if (selJustify && selAlign) {
      const applyAlign = () => {
        const target = data.applyToNavbar ? document.getElementById('ch-navbar') : stageEl;
        if (target) {
          target.style.justifyContent = selJustify.value;
          target.style.alignItems = selAlign.value;
        }
      };
      selJustify.addEventListener('change', applyAlign);
      selAlign.addEventListener('change', applyAlign);
      applyAlign();
    }

    if (selWrap && selGap) {
      const applyWrap = () => {
        const target = document.getElementById('ch-card-wrap');
        if (target) {
          target.style.flexWrap = selWrap.value;
          target.style.gap = selGap.value;
        }
      };
      selWrap.addEventListener('change', applyWrap);
      selGap.addEventListener('change', applyWrap);
      applyWrap();
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      loadChallenge(parseInt(tab.dataset.challenge, 10));
    });
  });

  btnVerify.addEventListener('click', () => {
    const ch = challenges[activeChallenge];
    const data = ch.init();
    const passed = data.check(stageEl);

    if (passed) {
      feedbackEl.className = 'challenge-feedback success';
      feedbackEl.innerHTML = '🎉 <strong>¡Excelente trabajo!</strong> Has resuelto el desafío a la perfección.';
      showToast('¡Reto completado con éxito! 🎉');
    } else {
      feedbackEl.className = 'challenge-feedback';
      feedbackEl.innerHTML = '❌ <strong>Aún no es correcto.</strong> Revisa las propiedades o consulta la pista.';
    }
  });

  btnSolution.addEventListener('click', () => {
    const ch = challenges[activeChallenge];
    const data = ch.init();
    const sol = data.solution;

    feedbackEl.className = 'challenge-feedback hint';
    feedbackEl.innerHTML = sol.hint;

    // Aplicar automáticamente la solución a los controles
    if (sol.justifyContent && sol.alignItems) {
      const selJustify = document.getElementById('ch-ctl-justify');
      const selAlign = document.getElementById('ch-ctl-align');
      if (selJustify && selAlign) {
        selJustify.value = sol.justifyContent;
        selAlign.value = sol.alignItems;
        selJustify.dispatchEvent(new Event('change'));
        selAlign.dispatchEvent(new Event('change'));
      }
    }

    if (sol.flexWrap && sol.gap) {
      const selWrap = document.getElementById('ch-ctl-wrap');
      const selGap = document.getElementById('ch-ctl-gap');
      if (selWrap && selGap) {
        selWrap.value = sol.flexWrap;
        selGap.value = sol.gap;
        selWrap.dispatchEvent(new Event('change'));
        selGap.dispatchEvent(new Event('change'));
      }
    }
  });

  // Cargar reto 1 por defecto
  loadChallenge(1);
}

/* ==========================================================================
   06. CLIC-TO-COPY GLOBAL
   ========================================================================== */
function initClipboardToasts() {
  // Prevenir navegación vacía en links hash si son solo scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
}
