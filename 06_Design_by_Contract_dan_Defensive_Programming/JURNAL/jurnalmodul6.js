class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 200) throw new Error("Judul tidak boleh kosong dan maksimal 200 karakter.");
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (count < 0 || count > 25000000) throw new Error("Jumlah play count tidak valid.");
        if (this.playCount + count > Number.MAX_SAFE_INTEGER) throw new Error("Play count melebihi batas maksimum.");
        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}, Title: ${this.title}, Play Count: ${this.playCount}`);
    }
}

class SayaTubeUser {
    constructor(username) {
        if (!username || username.length > 100) throw new Error("Username tidak boleh kosong dan maksimal 100 karakter.");
        this.username = username;
        this.uploadedVideos = [];
    }

    addVideo(video) {
        if (!(video instanceof SayaTubeVideo)) throw new Error("Input harus berupa instance SayaTubeVideo.");
        this.uploadedVideos.push(video);
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((sum, video) => sum + video.playCount, 0);
    }

    printAllVideoPlayCount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.slice(0, 8).forEach((video, index) => {
            console.log(`Video ${index + 1}: ${video.title}`);
        });
    }
}

// Contoh penggunaan
const user = new SayaTubeUser("Dzikri Naufal");
const video1 = new SayaTubeVideo("Review Film Ted Lasso Season 2 oleh Dzikri Naufal");
const video2 = new SayaTubeVideo("Review Film Shadow and Bone oleh Dzikri Naufal");
video1.increasePlayCount(10000);
video2.increasePlayCount(20000);
user.addVideo(video1);
user.addVideo(video2);
user.printAllVideoPlayCount();
