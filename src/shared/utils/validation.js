export const validation = {
    email: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return {
            isValid: emailRegex.test(value),
            message: emailRegex.test(value) ? '' : 'Por favor ingresa un correo electrónico válido'
        };
    },

    required: (value) => {
        const isValid = value !== null && value !== undefined && value.trim() !== '';
        return {
            isValid,
            message: isValid ? '' : 'Este campo es requerido'
        };
    },

    minLength: (value, min) => {
        const isValid = value.length >= min;
        return {
            isValid,
            message: isValid ? '' : `Este campo debe tener al menos ${min} caracteres`
        };
    },

    maxLength: (value, max) => {
        const isValid = value.length <= max;
        return {
            isValid,
            message: isValid ? '' : `Este campo no debe exceder ${max} caracteres`
        };
    }
};