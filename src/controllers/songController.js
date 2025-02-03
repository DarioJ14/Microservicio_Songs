const Song = require('../models/song');

// Obtener todas las canciones
exports.getAllSongs = async (req, res) => {
    try {
        const songs = await Song.findAll();
        res.json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una canción por ID
exports.getSongById = async (req, res) => {
    try {
        const song = await Song.findByPk(req.params.id);
        if (!song) return res.status(404).json({ message: "Canción no encontrada" });
        res.json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva canción
exports.createSong = async (req, res) => {
    try {
        const { SONG_NAME, SONG_PATH } = req.body;
        const newSong = await Song.create({ SONG_NAME, SONG_PATH });
        res.status(201).json(newSong);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una canción
exports.updateSong = async (req, res) => {
    try {
        const song = await Song.findByPk(req.params.id);
        if (!song) return res.status(404).json({ message: "Canción no encontrada" });

        await song.update(req.body);
        res.json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar una canción
exports.deleteSong = async (req, res) => {
    try {
        const song = await Song.findByPk(req.params.id);
        if (!song) return res.status(404).json({ message: "Canción no encontrada" });

        await song.destroy();
        res.json({ message: "Canción eliminada" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
