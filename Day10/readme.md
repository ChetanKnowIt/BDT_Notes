NOTES:
======


1. TASK: employee partitioner
2. TASK: hadoop streaming for word count
3. TASK: hadoop streaming for average age 
			hadoop jar hadoop-streaming-3.3.4.jar -file mapper.py -mapper mapper.py -file reducer.py -reducer reducer.py -input /input2/ages.txt -output /ages_streaming

4. hadoop streaming word count could be improved with following ways: 
    
    `mapper.py`

    ```
    import sys
    import re
    from collections import defaultdict
    
    def sanitize_word(word):
        # Remove punctuation and convert to lowercase using regular expression
        return re.sub(r'[^\w\s]', '', word).lower()
    
    word_count = defaultdict(int)
    
    for line in sys.stdin:
        # Use a generator expression to generate each word on the fly
        for word in (sanitize_word(w) for w in line.split()):
            if word:  # Ensure the word is not empty
                word_count[word] += 1
    
    # Print the word count for each word
    for word, count in word_count.items():
        print(f"{word}\t{count}")
    ```
    
    Similarly for `reducer.py`
    
    ```
    #!/usr/bin/python3
    
    import sys
    from collections import defaultdict
    
    counts = defaultdict(int)
    
    for line in sys.stdin:
        line = line.strip()
        if line:  # Check if line is not empty
            parts = line.split(maxsplit=1)
            if parts:  # Ensure there is at least one part
                fruit = parts[0]
                counts[fruit] += 1
    
    # Output the counts, sorted by key
    for fruit in sorted(counts):
        print(f"{fruit}\t{counts[fruit]}")
    ```


