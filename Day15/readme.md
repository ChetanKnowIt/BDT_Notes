# NOTES

1. NoSQL
	1. Types: 
		1. Wide Column: Azure Cosmos DB, Cassandra, HBase
		2. Document: CouchDB, MongoDB
		3. Key-Value: Dynamo, Redis, Apache Ignite
		4. Graph: Azure Cosmos DB, AllegroGraph, Neo4j, Apache Giraph
	2. SQL vs NoSQL
		1. relational vs distributed
		2. schema based and schemaless
		3. complex queries possible - complex is avoided
		4. not good for hierarchical data - good for hierarchical data
	3. Why NoSQL?
		1. support for large number of concurrent users
		2. deliver highly responsive experiences to globally distributed base of users
		3. be always available -> no downtime
		4. handle semi and unstructured data
		5. rapidly adapt to changing requirements with frequent updates and new features
	4. When to use NoSQL?
		1. Fast-paced AGILE development
		2. Storage of structured and semi-structured data
		3. Huge volumes of data
		4. requirements of scale-out architecture
		5. modern application paradigm like microservices and real-time processing
	5. Misconcepts
		1. Relationship data is best suited for relational databases
		2. NoSQL databases don't support ACID transactions 	
	6. RDBMS vs MongoDB
		1. db - db
		2. table - collection
		3. row - document
		4. columns - fields 
	7. Example Document
		1. JSON(Java Script Object Notation) type file
	8. Advantages
		1. Schema less
		2. no complex joins
		3. structure of single object is clear
		4. deep query-ability
		5. ease of scale out
		6. coversion/mapping of application objects to database objects is not needed
		7. uses internal memory(RAM) for storing the(windowed) working set, enabling faster access of data 
	9. Why to use MongoDB?
		1. JSON
		2. index any attribute
		3. replication & high availability
		4. auto-sharding
		5. free
	10. Where to use?
		1. Big data
		2. content management and delivery
		3. mobile and social infrastructure
		4. user data management
		5. data hub

2. ETL
	1. Links
		1. https://machinelearningcompass.com/dataset_optimization/standardization/
		2.   