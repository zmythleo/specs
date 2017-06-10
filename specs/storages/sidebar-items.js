initSidebarItems({"struct":[["BTreeStorage","BTreeMap-based storage."],["DenseVecStorage","Dense vector storage. Has a redirection 2-way table between entities and components, allowing to leave no gaps within the data."],["FlaggedStorage","Wrapper storage that stores modifications to components in a bitset."],["HashMapStorage","HashMap-based storage. Best suited for rare components."],["NullStorage","A null storage type, used for cases where the component doesn't contain any data and instead works as a simple flag."],["VecStorage","Vector storage. Uses a simple `Vec`. Supposed to have maximum performance for the components mostly present in entities."]]});