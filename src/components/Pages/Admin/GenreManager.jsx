import { useState, useEffect } from "react";
import genresData from "../../../Utils/genres";
import "./manager.css";

export default function GenreManager() {
    const [genres, setGenres] = useState([]);
    const [formData, setFormData] = useState({ name: "", description: "" });
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setGenres(genresData);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddGenre = (e) => {
        e.preventDefault();
        if (formData.name.trim() === "") {
            alert("Nama genre tidak boleh kosong!");
            return;
        }
        const newGenre = {
            id: Math.max(...genres.map((g) => g.id), 0) + 1,
            name: formData.name,
            description: formData.description,
        };
        setGenres([...genres, newGenre]);
        setFormData({ name: "", description: "" });
        setIsFormOpen(false);
        alert("Genre berhasil ditambahkan!");
    };

    const handleDeleteGenre = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus genre ini?")) {
            setGenres(genres.filter((g) => g.id !== id));
        }
    };

    const filteredGenres = genres.filter(
        (genre) =>
            genre.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            genre.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="manager-container">
            <div className="manager-header">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="🔍 Cari genre..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
                <button
                    className="btn-add"
                    onClick={() => setIsFormOpen(!isFormOpen)}
                >
                    {isFormOpen ? "❌ Tutup" : "➕ Tambah Genre"}
                </button>
            </div>

            {isFormOpen && (
                <div className="form-container">
                    <form onSubmit={handleAddGenre} className="add-form">
                        <div className="form-group">
                            <label htmlFor="name">Nama Genre *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Masukkan nama genre..."
                                value={formData.name}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Deskripsi</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Masukkan deskripsi genre..."
                                value={formData.description}
                                onChange={handleInputChange}
                                className="form-textarea"
                                rows="3"
                            />
                        </div>

                        <button type="submit" className="btn-submit">
                            💾 Simpan Genre
                        </button>
                    </form>
                </div>
            )}

            <div className="data-grid">
                {filteredGenres.length === 0 ? (
                    <div className="empty-state">
                        <p>📭 Tidak ada genre yang ditemukan</p>
                    </div>
                ) : (
                    filteredGenres.map((genre) => (
                        <div key={genre.id} className="card">
                            <div className="card-header">
                                <h3>{genre.name}</h3>
                                <span className="badge">#{genre.id}</span>
                            </div>
                            <p className="card-description">{genre.description}</p>
                            <div className="card-actions">
                                <button
                                    className="btn-delete"
                                    onClick={() => handleDeleteGenre(genre.id)}
                                >
                                    🗑️ Hapus
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="stats">
                <p>Total Genre: <strong>{genres.length}</strong></p>
            </div>
        </div>
    );
}
