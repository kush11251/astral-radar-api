exports.validateSignal = (signal) => {
    if (!signal.name || !signal.frequency) {
        throw new Error('Invalid signal');
    }
};