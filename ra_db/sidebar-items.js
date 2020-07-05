initSidebarItems({"constant":[["DEFAULT_LRU_CAP",""]],"enum":[["Edition",""],["SourceDatabaseExtGroupKey__",""],["SourceDatabaseGroupKey__",""]],"macro":[["impl_intern_key",""]],"mod":[["fixture","Fixtures are strings containing rust source code with optional metadata. A fixture without metadata is parsed into a single source file. Use this to test functionality local to one file."]],"struct":[["AbsPathBuf",""],["Canceled","An \"error\" signifying that the operation was canceled."],["CrateData",""],["CrateGraph","`CrateGraph` is a bit of information which turns a set of text files into a number of Rust crates. Each crate is defined by the `FileId` of its root module, the set of cfg flags (not yet implemented) and the set of dependencies. Note that, due to cfg's, there might be several crates for a single `FileId`! As in the rust-lang proper, a crate does not have a name. Instead, names are specified on dependency edges. That is, a crate might be known under different names in different dependent crates."],["CrateGraphQuery",""],["CrateId",""],["CrateName",""],["Dependency",""],["Env",""],["FileId",""],["FileLoaderDelegate","Silly workaround for cyclic deps between the traits"],["FilePosition",""],["FileRange",""],["FileSet",""],["FileSourceRootQuery",""],["FileTextQuery",""],["ParseQuery",""],["ProcMacroId",""],["RelativePath","A borrowed, immutable relative path."],["RelativePathBuf","An owned, mutable relative path."],["SourceDatabaseExtGroupStorage__",""],["SourceDatabaseExtStorage","Representative struct for the query group."],["SourceDatabaseGroupStorage__",""],["SourceDatabaseStorage","Representative struct for the query group."],["SourceRoot",""],["SourceRootCratesQuery",""],["SourceRootId","Files are grouped into source roots. A source root is a directory on the file systems which is watched for changes. Typically it corresponds to a Rust crate. Source roots might be nested: in this case, a file belongs to the nearest enclosing source root. Paths to files are always relative to a source root, and the analyzer does not know the root path of the source root at all. So, a file from one source root can't refer to a file in another source root by path."],["SourceRootQuery",""],["VfsPath","Long-term, we want to support files which do not reside in the file-system, so we treat VfsPaths as opaque identifiers."]],"trait":[["CheckCanceled",""],["FileLoader",""],["SourceDatabase","Database which stores all significant input facts: source code and project model. Everything else in rust-analyzer is derived from these queries."],["SourceDatabaseExt","We don't want to give HIR knowledge of source roots, hence we extract these methods into a separate DB."],["Upcast",""]]});