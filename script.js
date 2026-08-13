// Project Data
const projects = [
    {
        agency: "아세안시스템즈",
        client: "베트남한국업체",
        project: "다계층 유통망을 위한 실시간 정산 및 데이터 분석 대시보드 구축, 현장 업무용 웹·앱 개발",
        role: "구축 및 운영",
        languages: ["Spring", "Thymeleaf", "Window", "Linux", "python", "rabbitMQ", "Redis", "Reactjs", "Vue", "Mssql", "Mysql", "socket", "Batch", "Flutter", "Kotlin", "Vercel", "Firebase", "Supabase"]
    },
    {
        agency: "인터파크",
        client: "인터파크",
        project: "쇼핑 리뉴얼 개발PM 운영 및 고도화",
        role: "구축 및 운영",
        languages: ["JAVA/JSP", "Windows", "Unix", "Mysql", "Oracle", "Spring", "Ibatis"]
    },
    {
        agency: "파이언넷",
        client: "CJ",
        project: "CJ쇼핑, CJ올리브영, CJONE 상품, 전시, 주문 리뉴얼 운영 및 고도화",
        role: "구축 및 운영",
        languages: ["JAVA/JSP", "Oracle9i", "Spring", "Ibatis"]
    },
    {
        agency: "인터파크",
        client: "인터파크",
        project: "메인, 전시, 상품, 검색, 모바일웹, 베스트셀러, 블로그 리뉴얼 운영 및 고도화",
        role: "구축 및 운영",
        languages: ["JAVA/JSP", "Windows", "Unix", "Mysql", "Oracle9i", "Spring", "Ibatis", "EJB", "Jquery", "Procedure", "Batch"]
    },
    {
        agency: "넷피아",
        client: "넷피아",
        project: "넷피아 한글 도메인 운영 및 고도화",
        role: "구축 및 운영",
        languages: ["ASP", "Windows", "Oracle8i"]
    },
    {
        agency: "더블유투",
        client: "이넬",
        project: "이넬 쇼핑몰 제작 및 운영",
        role: "구축 및 운영",
        languages: ["ASP", "Windows", "Mssql"]
    },
    {
        agency: "더블유투",
        client: "국민상조",
        project: "국민상조 리뉴얼",
        role: "구축 및 운영",
        languages: ["JAVA/JSP", "Windows", "Oracle8i", "Spring", "Ibatis"]
    },
    {
        agency: "더블유투",
        client: "삼성테크윈",
        project: "삼성테크윈 리뉴얼",
        role: "구축 및 운영",
        languages: ["ASP", "Windows", "Mssql", "IIS"]
    },
    {
        agency: "더블유투",
        client: "호반건설",
        project: "호반건설 리뉴얼",
        role: "구축 및 운영",
        languages: ["ASP", "Windows", "Mssql", "IIS"]
    },
    {
        agency: "더블유투",
        client: "효성진흥기업",
        project: "효성진흥기업 리뉴얼",
        role: "구축 및 운영",
        languages: ["JAVA/JSP", "Unix", "Oracle9i", "Framework"]
    },
    {
        agency: "더블유투",
        client: "KT",
        project: "KT아이디어풀 신규제작",
        role: "구축 및 운영",
        languages: ["JAVA/JSP", "Unix", "Oracle9i"]
    },
    {
        agency: "더블유투",
        client: "효성건설",
        project: "효성건설 리뉴얼",
        role: "구축 및 운영",
        languages: ["JAVA/JSP", "Unix", "Oracle9i", "Framework", "Prototype"]
    },
    {
        agency: "더블유투",
        client: "월드비전",
        project: "월드비전 리뉴얼",
        role: "구축 및 운영",
        languages: ["ASP", "Windows", "Mssql", "IIS", "Procedure", "Prototype"]
    },
    {
        agency: "더블유투",
        client: "대한주택공사",
        project: "대한주택공사 리뉴얼",
        role: "구축 및 운영",
        languages: ["JAVA/JSP", "Unix", "Oracle8i", "Spring", "Ibatis"]
    },
    {
        agency: "더블유투",
        client: "KT",
        project: "RND 연구소 특허사이트 신규제작",
        role: "구축 및 운영",
        languages: ["JAVA/JSP", "Windows", "Oracle8i"]
    },
    {
        agency: "더블유투",
        client: "CJ",
        project: "온무비스타일 리뉴얼",
        role: "구축 및 운영",
        languages: ["ASP", "Windows", "Mssql", "IIS", "Procedure"]
    },
    {
        agency: "더블유투",
        client: "효성",
        project: "효성 사이트 리뉴얼",
        role: "구축 및 운영",
        languages: ["JAVA/JSP", "UNIX", "Oracle"]
    },
    {
        agency: "더블유투",
        client: "KT",
        project: "KT채용시스템 구축, 사이트 리뉴얼 운영 및 고도화",
        role: "구축 및 운영",
        languages: ["JAVA/JSP", "UNIX", "Oracle"]
    },
    {
        agency: "더블유투",
        client: "효성",
        project: "효성벤츠 신규제작",
        role: "구축 및 운영",
        languages: ["JAVA/JSP", "UNIX", "Oracle"]
    },
    {
        agency: "더블유투",
        client: "소프트웨어공제조합",
        project: "소프트웨어공제조합 유지보수",
        role: "구축 및 운영",
        languages: ["JAVA/JSP", "UNIX", "Oracle"]
    }
];

// Popular Tech Tags to highlight at top (normalized/selected)
const popularTech = [
    "Spring", "Reactjs", "Vue", "Flutter", "JAVA/JSP", "ASP", "python",
    "Mysql", "Mssql", "Oracle", "Firebase", "Supabase", "Unix", "Windows"
];

// State Management
let selectedTags = [];
let searchQuery = "";

// Elements
const techTagsContainer = document.getElementById("tech-tags-container");
const projectSearch = document.getElementById("project-search");
const clearSearchBtn = document.getElementById("clear-search");
const activeFiltersContainer = document.getElementById("active-filters");
const projectTbody = document.getElementById("project-tbody");
const projectCardsContainer = document.getElementById("project-cards-container");
const noResultsElement = document.getElementById("no-results");
const projectTable = document.getElementById("project-table");
const resetFiltersBtn = document.getElementById("reset-filters");

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    renderTags();
    filterProjects();
    setupEventListeners();
    setupClipboard();
});

// Render filterable tag chips
function renderTags() {
    techTagsContainer.innerHTML = "";
    
    // "All" tag
    const allTag = document.createElement("button");
    allTag.className = `tech-tag ${selectedTags.length === 0 ? "active" : ""}`;
    allTag.textContent = "전체보기";
    allTag.addEventListener("click", () => {
        selectedTags = [];
        filterProjects();
        updateTagActiveStates();
    });
    techTagsContainer.appendChild(allTag);

    // Dynamic popular tags
    popularTech.forEach(tech => {
        const btn = document.createElement("button");
        btn.className = `tech-tag ${selectedTags.includes(tech) ? "active" : ""}`;
        btn.textContent = tech === "Reactjs" ? "React" : (tech === "python" ? "Python" : tech);
        btn.addEventListener("click", () => toggleTag(tech));
        techTagsContainer.appendChild(btn);
    });
}

function updateTagActiveStates() {
    const tags = techTagsContainer.querySelectorAll(".tech-tag");
    tags.forEach(tag => {
        const text = tag.textContent;
        if (text === "전체보기") {
            if (selectedTags.length === 0) tag.classList.add("active");
            else tag.classList.remove("active");
        } else {
            const normalizedText = text === "React" ? "Reactjs" : (text === "Python" ? "python" : text);
            if (selectedTags.includes(normalizedText)) {
                tag.classList.add("active");
            } else {
                tag.classList.remove("active");
            }
        }
    });
    renderActiveFilterBadges();
}

function toggleTag(tech) {
    const index = selectedTags.indexOf(tech);
    if (index > -1) {
        selectedTags.splice(index, 1);
    } else {
        selectedTags.push(tech);
    }
    filterProjects();
    updateTagActiveStates();
}

// Active search query & tag badges
function renderActiveFilterBadges() {
    activeFiltersContainer.innerHTML = "";
    
    if (selectedTags.length === 0 && !searchQuery) {
        return;
    }

    selectedTags.forEach(tag => {
        const displayTag = tag === "Reactjs" ? "React" : (tag === "python" ? "Python" : tag);
        const badge = document.createElement("div");
        badge.className = "filter-badge";
        badge.innerHTML = `${displayTag} <i class="fa-solid fa-xmark" onclick="removeTagFilter('${tag}')"></i>`;
        activeFiltersContainer.appendChild(badge);
    });

    if (searchQuery) {
        const badge = document.createElement("div");
        badge.className = "filter-badge";
        badge.innerHTML = `검색어: "${searchQuery}" <i class="fa-solid fa-xmark" onclick="clearSearchInput()"></i>`;
        activeFiltersContainer.appendChild(badge);
    }
}

window.removeTagFilter = function(tag) {
    selectedTags = selectedTags.filter(t => t !== tag);
    filterProjects();
    updateTagActiveStates();
};

window.clearSearchInput = function() {
    projectSearch.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    filterProjects();
    renderActiveFilterBadges();
};

// Filter & search logic
function filterProjects() {
    const filtered = projects.filter(item => {
        // Tag filter matching (matches ALL selected tags)
        const matchesTags = selectedTags.every(tag => {
            return item.languages.some(lang => lang.toLowerCase() === tag.toLowerCase());
        });

        // Search text matching
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = !searchQuery || 
            item.agency.toLowerCase().includes(searchLower) ||
            item.client.toLowerCase().includes(searchLower) ||
            item.project.toLowerCase().includes(searchLower) ||
            item.languages.some(lang => lang.toLowerCase().includes(searchLower));

        return matchesTags && matchesSearch;
    });

    renderProjects(filtered);
}

// Render dynamic elements
function renderProjects(data) {
    projectTbody.innerHTML = "";
    projectCardsContainer.innerHTML = "";

    if (data.length === 0) {
        projectTable.style.display = "none";
        projectCardsContainer.style.display = "none";
        noResultsElement.style.display = "block";
        return;
    }

    noResultsElement.style.display = "none";
    if (window.innerWidth > 768) {
        projectTable.style.display = "table";
        projectCardsContainer.style.display = "none";
    } else {
        projectTable.style.display = "none";
        projectCardsContainer.style.display = "flex";
    }

    data.forEach((item, index) => {
        // Table row (Desktop)
        const tr = document.createElement("tr");
        tr.style.animation = `fadeInUp 0.3s ease forwards ${index * 0.03}s`;
        tr.style.opacity = 0;
        tr.style.transform = "translateY(10px)";
        
        // Render tech badges in the table cell
        const badgesHtml = item.languages.map(lang => `<span class="badge-tech">${lang}</span>`).join(" ");

        tr.innerHTML = `
            <td class="cell-company">${item.agency}</td>
            <td class="cell-client">${item.client}</td>
            <td><strong>${item.project}</strong></td>
            <td class="cell-role">${item.role}</td>
            <td>
                <div class="tech-badges-wrapper">
                    ${badgesHtml}
                </div>
            </td>
        `;
        projectTbody.appendChild(tr);

        // Mobile card
        const card = document.createElement("div");
        card.className = "project-card-item";
        card.style.animation = `fadeInUp 0.3s ease forwards ${index * 0.03}s`;
        card.style.opacity = 0;
        card.style.transform = "translateY(10px)";

        const mobileBadgesHtml = item.languages.map(lang => `<span class="badge-tech">${lang}</span>`).join(" ");

        card.innerHTML = `
            <div class="p-card-header">
                <div class="p-card-meta">
                    <span class="p-card-company">${item.agency}</span>
                    <span class="p-card-client">${item.client}</span>
                </div>
                <span class="p-card-role">${item.role}</span>
            </div>
            <div class="p-card-title">${item.project}</div>
            <div class="p-card-techs">
                ${mobileBadgesHtml}
            </div>
        `;
        projectCardsContainer.appendChild(card);
    });
}

// Setup listeners
function setupEventListeners() {
    // Search listener
    projectSearch.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        if (searchQuery) {
            clearSearchBtn.style.display = "block";
        } else {
            clearSearchBtn.style.display = "none";
        }
        filterProjects();
        renderActiveFilterBadges();
    });

    clearSearchBtn.addEventListener("click", clearSearchInput);

    resetFiltersBtn.addEventListener("click", () => {
        selectedTags = [];
        clearSearchInput();
        updateTagActiveStates();
    });

    // Resize event to switch views correctly
    window.addEventListener("resize", () => {
        filterProjects();
    });
}

// Clipboard functionality
function setupClipboard() {
    const copyButtons = document.querySelectorAll(".copy-btn, .copy-btn-simple");
    copyButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-clipboard");
            const textToCopy = document.getElementById(targetId).textContent;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast();
            }).catch(err => {
                console.error("복사 실패: ", err);
            });
        });
    });
}

function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

// Add animation keyframes via JS injection to keep CSS neat or let it run
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;
document.head.appendChild(styleSheet);
