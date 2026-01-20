/**
 * API Configuration and Helper Functions
 * Connects frontend to Rohit Portfolio Backend
 */

// API Base URL - Update this if your backend is hosted elsewhere
const API_BASE_URL = 'https://rohit-portfolio-backend.vercel.app/api/v1';

/**
 * Submit Pitch Form
 * Sends pitch data to backend including file
 */
async function submitPitch(formData) {
    try {
        const payload = new FormData();

        // Append all text fields
        payload.append("name", formData.name || '');
        payload.append("company_name", formData.company || '');
        payload.append("sector", formData.sector || '');
        payload.append("investment_required", formData.investment || '');
        payload.append("email", formData.email || '');
        payload.append("contact_number", formData.phone || '');
        payload.append("pitch_summary", formData.pitchSummary || '');

        // Append file if it exists
        if (formData.file && formData.file instanceof File) {
            payload.append("proposal_file", formData.file, formData.file.name);
        }

        console.log("Submitting pitch with file:", formData.file?.name || "No file");

        const response = await fetch(`${API_BASE_URL}/pitch`, {
            method: "POST",
            body: payload, // FormData automatically sets Content-Type with boundary
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Server error response:", errorText);
            throw new Error(`Server error: ${response.status} - ${errorText}`);
        }

        const responseData = await response.json();
        return { success: true, data: responseData };

    } catch (error) {
        console.error("Pitch submit error:", error);
        return { success: false, error: error.message };
    }
}

/**
 * Submit Connect/Contact Form
 * Sends contact inquiry to backend
 */
async function submitConnect(formData) {
    try {
        const response = await fetch(`${API_BASE_URL}/connect`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { success: true, data };
    } catch (error) {
        console.error('Error submitting contact form:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Show notification message
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#4CAF50' : '#f44336'};
    color: white;
    padding: 16px 24px;
    border-radius: 4px;
    z-index: 9999;
    animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

/**
 * Format form data for API submission including file
 */
function formatPitchData(formElements) {
    const formData = {
        name: formElements['name']?.value || '',
        company: formElements['company']?.value || '',
        sector: formElements['sector']?.value || '',
        investment: formElements['investment']?.value || '',
        email: formElements['email']?.value || '',
        phone: formElements['phone']?.value || '',
        pitchSummary: formElements['pitchSummary']?.value || '',
        file: null,
    };

    // Get the file from the file input
    const fileInput = document.getElementById('file-upload');
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
        formData.file = fileInput.files[0];
    }

    return formData;
}

function formatConnectData(formElements) {
    return {
        name: formElements[0]?.value || '',
        email: formElements[1]?.value || '',
        purpose: formElements[2]?.value || '',
        message: formElements[3]?.value || '',
    };
}

