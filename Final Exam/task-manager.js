
 // Task Management Application Script :-
 //------------------------------------

 // for State Management :-
 //----------------------
    let tasks = [];
    let editingId = null;
    let currentStatusFilter = 'all';

// For Html DOM Elements :-
//-----------------------
    const taskForm = document.getElementById('taskForm');
    const taskIdInput = document.getElementById('taskId');
    const taskTitleInput = document.getElementById('taskTitle');
    const taskDescInput = document.getElementById('taskDescription');
    const taskDueDateInput = document.getElementById('taskDueDate');
    const taskPriorityInput = document.getElementById('taskPriority');
    const submitBtn = document.getElementById('submitBtn');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const formTitle = document.getElementById('formTitle');

    const tasksContainer = document.getElementById('tasksContainer');
    const emptyState = document.getElementById('emptyState');
    const searchInput = document.getElementById('searchInput');
    const priorityFilter = document.getElementById('priorityFilter');
    const filterTabs = document.querySelectorAll('.filter-tab');

// For Statistics Counter Elements :-
//------------------------------------
    const statTotal = document.getElementById('statTotal');
    const statPending = document.getElementById('statPending');
    const statCompleted = document.getElementById('statCompleted');
    const statHigh = document.getElementById('statHigh');

// For Initialize App on DOM Load :-
//------------------------------------
    document.addEventListener('DOMContentLoaded', () => {
        loadTasksFromStorage();
        displayTasks();

// For Event Listeners diferent actions :-
//------------------------------------
    taskForm.addEventListener('submit', handleFormSubmit);
    cancelEditBtn.addEventListener('click', resetForm);
    searchInput.addEventListener('input', displayTasks);
    priorityFilter.addEventListener('change', displayTasks);

    filterTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
    filterTabs.forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    currentStatusFilter = e.target.getAttribute('data-status');
    displayTasks();
    });
    });
    });

// Function to Load Tasks from Local Storage:-
//------------------------------------------
    function loadTasksFromStorage() {
    const storedTasks = localStorage.getItem('tasks_pro_dynamic');

    if (storedTasks) {
        try {
            tasks = JSON.parse(storedTasks);
        } catch (e) {
            tasks = [];
        }
    }

    // For Add 10 Sample Tasks Only Once :-
    //------------------------------------
    if (!localStorage.getItem('tasks_pro_sample_added')) {
        const today = new Date();

        const getDueDate = (days) => {
            const dueDate = new Date(today);
            dueDate.setDate(today.getDate() + days);
            return dueDate.toISOString().split('T')[0];
        };

    const sampleTasks = [
    {
        id: Date.now() + 1,
        title: 'Complete HTML and CSS Practice',
        description: 'Build a responsive webpage using semantic HTML and CSS.',
        dueDate: getDueDate(1),
        priority: 'High',
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: Date.now() + 2,
        title: 'Revise JavaScript Basics',
        description: 'Practice variables, conditions, loops, and functions.',
        dueDate: getDueDate(2),
        priority: 'High',
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: Date.now() + 3,
        title: 'Finish Bootstrap Layout',
        description: 'Create a responsive layout with grid, cards, and navbar.',
        dueDate: getDueDate(3),
        priority: 'Medium',
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: Date.now() + 4,
        title: 'Check Project Images',
        description: 'Verify that all images and favicon assets load correctly.',
        dueDate: getDueDate(1),
        priority: 'Medium',
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: Date.now() + 5,
        title: 'Practice DOM Manipulation',
        description: 'Select elements and update webpage content using JavaScript.',
        dueDate: getDueDate(4),
        priority: 'High',
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: Date.now() + 6,
        title: 'Organize Project Files',
        description: 'Keep HTML, CSS, JavaScript, and favicon files organized.',
        dueDate: getDueDate(5),
        priority: 'Low',
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: Date.now() + 7,
        title: 'Test Task Search',
        description: 'Test searching tasks by title and description.',
        dueDate: getDueDate(2),
        priority: 'Medium',
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: Date.now() + 8,
        title: 'Review Task Priorities',
        description: 'Check the high, medium, and low priority filters.',
        dueDate: getDueDate(6),
        priority: 'Low',
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: Date.now() + 9,
        title: 'Test Edit and Delete',
        description: 'Confirm that task updates and deletions save correctly.',
        dueDate: getDueDate(3),
        priority: 'Medium',
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: Date.now() + 10,
        title: 'Complete Project Review',
        description: 'Review the UI, responsive behavior, and local storage.',
        dueDate: getDueDate(7),
        priority: 'High',
        completed: false,
        createdAt: new Date().toISOString()
    }
];

        tasks = [...sampleTasks, ...tasks];
        saveTasksToStorage();
        localStorage.setItem('tasks_pro_sample_added', 'true');
    }
    }

// Function to Save Tasks to Local Storage :-
//----------------------------------------
    function saveTasksToStorage() {
        localStorage.setItem('tasks_pro_dynamic', JSON.stringify(tasks));
    }

// Function to Show Custom Toast Notification with Bootstrap :-
//---------------------------------------------------------
    function showToast(message, type = 'success') {
        const toastEl = document.getElementById('appToast');
        const toastBody = document.getElementById('toastMessage');

        toastBody.textContent = message;

        toastEl.className = `toast align-items-center text-white border-0 custom-toast ${
            type == 'success' ? 'bg-success' :
            type == 'danger' ? 'bg-danger' : 'bg-primary'
        }`;

        const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
        toast.show();
    }

// Function to Update Dynamic Live Statistics Header Counters :-
//-----------------------------------------------------------
    function updateStatistics() {
        const total = tasks.length;
        const completed = tasks.filter(t => t.completed).length;
        const pending = total - completed;
        const highPriority = tasks.filter(
            t => t.priority == 'High' && !t.completed
        ).length;

        statTotal.textContent = total;
        statPending.textContent = pending;
        statCompleted.textContent = completed;
        statHigh.textContent = highPriority;
    }

// Function to Handle Add / Update Task Form Submission with Validation :-
    function handleFormSubmit(e) {
        e.preventDefault();

// for Validate Title and Due Date :-
//------------------------------------
        const title = taskTitleInput.value.trim();
        const dueDate = taskDueDateInput.value;

        let isValid = true;

        if (!title) {
            taskTitleInput.classList.add('is-invalid');
            isValid = false;
        } else {
            taskTitleInput.classList.remove('is-invalid');
        }

        if (!dueDate) {
            taskDueDateInput.classList.add('is-invalid');
            isValid = false;
        } else {
            taskDueDateInput.classList.remove('is-invalid');
        }

        if (!isValid) return;

        const description = taskDescInput.value.trim();
        const priority = taskPriorityInput.value;

        if (editingId) {
// For Update Existing Tasks :-
//--------------------------
            tasks = tasks.map(task => {
                if (task.id == editingId) {
                    return {
                        ...task,
                        title,
                        description,
                        dueDate,
                        priority
                    };
                }
                return task;
            });

            showToast('Task updated successfully!', 'primary');
        } else {
// For Create New Task:-
//---------------------
            const newTask = {
                id: Date.now(),
                title,
                description,
                dueDate,
                priority,
                completed: false,
                createdAt: new Date().toISOString()
            };

            tasks.unshift(newTask);
            showToast('New task added successfully!');
        }

        saveTasksToStorage();
        resetForm();
        displayTasks();
    }

// function to Display and Render Tasks with Filtering and Searching Capabilities :-
//-------------------------------------------------------------------------------
    function displayTasks() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedPriority = priorityFilter.value;

// Filter function for tasks based on Search, Priority, and Status Tabs :-
//---------------------------------------------------------------------
        let filteredTasks = tasks.filter(task => {
            const matchesSearch =
                task.title.toLowerCase().includes(searchTerm) ||
                (task.description &&
                task.description.toLowerCase().includes(searchTerm));

            const matchesPriority =
                selectedPriority == 'All' ||
                task.priority == selectedPriority;

            let matchesStatus = true;

            if (currentStatusFilter == 'pending') {
                matchesStatus = !task.completed;
            } else if (currentStatusFilter == 'completed') {
                matchesStatus = task.completed;
            }

            return matchesSearch && matchesPriority && matchesStatus;
        });

// For Update live statistics counter:-
//------------------------------------
        updateStatistics();

// For Render task container with filtered tasks :-
//------------------------------------------------
        tasksContainer.innerHTML = '';

        if (filteredTasks.length == 0) {
            emptyState.classList.remove('d-none');
            return;
        } else {
            emptyState.classList.add('d-none');
        }

        filteredTasks.forEach(task => {
            const badgeClass =
                task.priority == 'High' ? 'badge-high' :
                task.priority == 'Medium' ? 'badge-medium' : 'badge-low';

// For Format Due Date cleanly and Readable :-
//-----------------------------------------
            const formattedDate = new Date(task.dueDate).toLocaleDateString(
                'en-US',
                {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                }
            );

// For Create Task Card Element with Bootstrap Classes and Dynamic Data :-
//----------------------------------------------------------------------
            const col = document.createElement('div');
            col.className = 'col-12';

            col.innerHTML = `
                <div class="card task-card priority-${task.priority.toLowerCase()} p-3 ${task.completed ? 'completed-task' : ''}">
                    <div class="d-flex align-items-start justify-content-between">
                        <div class="d-flex align-items-start gap-3">
                            <div class="form-check mt-1">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    ${task.completed ? 'checked' : ''}
                                    onchange="toggleTaskStatus(${task.id})"
                                    style="cursor: pointer; transform: scale(1.2);"
                                >
                            </div>

                            <div>
                                <h5 class="task-title fw-bold mb-1 text-dark fs-6">
                                    ${escapeHtml(task.title)}
                                </h5>

                                ${task.description ? `<p class="text-muted small mb-2">${escapeHtml(task.description)}</p>` : ''}

                                <div class="d-flex flex-wrap align-items-center gap-2 small text-secondary">
                                    <span class="badge ${badgeClass} fw-medium px-2 py-1">
                                        ${task.priority} Priority
                                    </span>

                                    <span>
                                        <i class="fa-regular fa-calendar me-1"></i>
                                        Due: ${formattedDate}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-outline-secondary border-0"
                                onclick="editTask(${task.id})"
                                title="Edit Task">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>

                            <button class="btn btn-outline-danger border-0"
                                onclick="deleteTask(${task.id})"
                                title="Delete Task">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                </div>`;

            tasksContainer.appendChild(col);
        });
    }

// Function to Toggle Task Completion Status with Confirmation and Update Local Storage and UI :-
//--------------------------------------------------------------------------------------------
    function toggleTaskStatus(id) {
        tasks = tasks.map(task => {
            if (task.id == id) {
                const updatedStatus = !task.completed;

                showToast(
                    updatedStatus
                        ? 'Task marked as completed!'
                        : 'Task marked as pending.',
                    'primary'
                );

        return { ...task, completed: updatedStatus };
            }
            return task;
        });

        saveTasksToStorage();
        displayTasks();
    }

// Function to Populate Form for Editing Task with Pre-filled Data and Change Form State to Edit Mode :-
//--------------------------------------------------------------------------------------------------------
    function editTask(id) {
        const task = tasks.find(t => t.id == id);
        if (!task) return;

        editingId = task.id;
        taskIdInput.value = task.id;
        taskTitleInput.value = task.title;
        taskDescInput.value = task.description || '';
        taskDueDateInput.value = task.dueDate;
        taskPriorityInput.value = task.priority;

// For Change Form State to Edit Mode with Dynamic Title and Button Text :-
//-------------------------------------------------------------------
        formTitle.innerHTML = `<i class="fa-solid fa-pen-to-square me-2 text-primary"></i>Edit Task`;
        submitBtn.innerHTML = `<i class="fa-solid fa-check me-1"></i> Update Task`;
        cancelEditBtn.classList.remove('d-none');

// For Scroll to form on mobile screens for better user experience :-
//---------------------------------------------------------------
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

// Function to Delete Task with Confirmation and Update Local Storage and UI :-
//---------------------------------------------------------------------------
    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasksToStorage();
        displayTasks();
        showToast('Task removed successfully.', 'danger');
    }

// Function to Reset Form State to Add New Task Mode and Clear Inputs and Validation States :-
//-----------------------------------------------------------------------------------------
    function resetForm() {
        editingId = null;
        taskForm.reset();
        taskIdInput.value = '';
        taskTitleInput.classList.remove('is-invalid');
        taskDueDateInput.classList.remove('is-invalid');

// For Change Form State to Add New Task Mode with Dynamic Title and Button Text :-
//------------------------------------------------------------------------------
        formTitle.innerHTML = `<i class="fa-solid fa-plus-circle me-2 text-primary"></i>Add New Task`;
        submitBtn.innerHTML = `<i class="fa-solid fa-plus me-1"></i> Add Task`;
        cancelEditBtn.classList.add('d-none');
    }

// Function For Helper to prevent XSS injection  :-
//----------------------------------------------
    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };

        return text.replace(/[&<>"']/g, function(m) {
            return map[m];
        });
    }
