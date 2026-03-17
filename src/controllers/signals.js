const signals = [];
exports.getSignals = (req, res) => {
    res.json(signals);
};
exports.createSignal = (req, res) => {
    const signal = req.body;
    signals.push(signal);
    res.json(signal);
};