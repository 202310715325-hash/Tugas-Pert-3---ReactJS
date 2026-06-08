import { useState, useEffect } from "react";
import authorsData from "../../../Utils/authors";
import "./manager.css";

export default function AuthorManager() {
    const [authors, setAuthors] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        bio: "",
    });
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setAuthors(authorsData);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleAddAuthor = (e) => {
        e.preventDefault();

        if (formData.name.trim() === "") {
            alert("Nama author tidak boleh kosong!");
            return;
        }

        if (!validateEmail(formData.email)) {
            alert("Email tidak valid!");
            return;
        }

        const newAuthor = {
            id: Math.max(...authors.map((a) => a.id), 0) + 1,
            name: formData.name,
            email: formData.email,
            bio: formData.bio,
        };
        setAuthors([...authors, newAuthor]);
        setFormData({ name: "", email: "", bio: "" });
        setIsFormOpen(false);
        alert("Author berhasil ditambahkan!");
    };

    const handleDeleteAuthor = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus author ini?")) {
            setAuthors(authors.filter((a) => a.id !== id));
        }
    };

    const filteredAuthors = authors.filter(
        (author) =>
            author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            author.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="manager-container">
            <div className="manager-header">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="🔍 Cari author..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
                <button
                    className="btn-add"
                    onClick={() => setIsFormOpen(!isFormOpen)}
                >
                    {isFormOpen ? "❌ Tutup" : "➕ Tambah Author"}
                </button>
            </div>

            {isFormOpen && (
                <div className="form-container">
                    <form onSubmit={handleAddAuthor} className="add-form">
                        <div className="form-group">
                            <label htmlFor="name">Nama Author *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Masukkan nama author..."
                                value={formData.name}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Masukkan email author..."
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio">Bio / Deskripsi</label>
                            <textarea
                                id="bio"
                                name="bio"
                                placeholder="Masukkan bio author..."
                                value={formData.bio}
                                onChange={handleInputChange}
                                className="form-textarea"
                                rows="3"
                            />
                        </div>

                        <button type="submit" className="btn-submit">
                            💾 Simpan Author
                        </button>
                    </form>
                </div>
            )}

            <div className="data-grid">
                {filteredAuthors.length === 0 ? (
                    <div className="empty-state">
                        <p>📭 Tidak ada author yang ditemukan</p>
                    </div>
                ) : (
                    filteredAuthors.map((author) => (
                        <div key={author.id} className="card author-card">
                            <div className="card-header">
                                <h3>✍️ {author.name}</h3>
                                <span className="badge">#{author.id}</span>
                            </div>
                            <p className="card-email">
                                <strong>Email:</strong> {author.email}
                            </p>
                            <p className="card-bio">
                                <strong>Bio:</strong> {author.bio || "Tidak ada deskripsi"}
                            </p>
                            <div className="card-actions">
                                <button
                                    className="btn-delete"
                                    onClick={() => handleDeleteAuthor(author.id)}
                                >
                                    🗑️ Hapus
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="stats">
                <p>Total Author: <strong>{authors.length}</strong></p>
            </div>
        </div>
    );
}
