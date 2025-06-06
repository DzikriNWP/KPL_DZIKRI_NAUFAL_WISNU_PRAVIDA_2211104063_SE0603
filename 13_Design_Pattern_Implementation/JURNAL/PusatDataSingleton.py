class PusatDataSingleton:
    _instance = None  # Singleton instance
    DataTersimpan = []

    def __init__(self):
        if not hasattr(self, 'initialized'):
            self.DataTersimpan = []
            self.initialized = True  # Cegah inisialisasi ulang

    @classmethod
    def GetDataSingleton(cls):
        if cls._instance is None:
            cls._instance = PusatDataSingleton()
        return cls._instance

    def GetSemuaData(self):
        return self.DataTersimpan

    def PrintSemuaData(self):
        for data in self.DataTersimpan:
            print(data)

    def AddSebuahData(self, input_data):
        self.DataTersimpan.append(input_data)

    def HapusSebuahData(self, index):
        if 0 <= index < len(self.DataTersimpan):
            self.DataTersimpan.pop(index)
