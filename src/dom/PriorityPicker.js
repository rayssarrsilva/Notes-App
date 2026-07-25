// dom/PriorityPicker.js
// 3 bolinhas coloridas (vermelho=high, amarelo=medium, verde=low) reutilizadas
// no form de Add Task e no modal de Edit Task.

const PRIORITY_COLORS = {
    high: "#e5484d",
    medium: "#f5c518",
    low: "#3fb950",
};

export function createPriorityPicker(initialValue = "medium", onChange) {
    let selected = initialValue;
    const buttons = {};

    const element = document.createElement("div");
    element.classList.add("priority-picker");
    element.style.display = "flex";
    element.style.gap = "6px";

    const applyStyles = () => {
        Object.entries(buttons).forEach(([level, btn]) => {
            btn.style.opacity = level === selected ? "1" : "0.35";
            btn.style.outline = level === selected ? "2px solid #333" : "none";
        });
    };

    Object.keys(PRIORITY_COLORS).forEach((level) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.classList.add("priority-dot", `priority-${level}`);
        btn.title = level.charAt(0).toUpperCase() + level.slice(1);
        btn.style.width = "22px";
        btn.style.height = "22px";
        btn.style.borderRadius = "50%";
        btn.style.border = "2px solid transparent";
        btn.style.cursor = "pointer";
        btn.style.backgroundColor = PRIORITY_COLORS[level];

        btn.addEventListener("click", () => {
            selected = level;
            applyStyles();
            onChange && onChange(level);
        });

        buttons[level] = btn;
        element.append(btn);
    });

    applyStyles();

    return {
        element,
        getValue: () => selected,
        setValue: (level) => {
            if (!PRIORITY_COLORS[level]) return;
            selected = level;
            applyStyles();
        },
    };
}