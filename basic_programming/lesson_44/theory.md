
### 1. **SLF4J с Logback**
Допустим, вы хотите использовать SLF4J в сочетании с Logback.

**POM.xml (если используется Maven) зависимости:**
	
```
<!-- SLF4J API -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.32</version>
</dependency>
<!-- Logback Classic (имплементация и адаптер для SLF4J) -->
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.2.6</version>
</dependency>
```

**Java код:**
			
	public class LogbackExample {
    	private static final Logger logger = LoggerFactory.getLogger(LogbackExample.class);

    public static void main(String[] args) {
        logger.info("This is an info message using Logback!");
        logger.warn("This is a warning message.");
        logger.error("This is an error message.");
   	 }
	}


### 2. **SLF4J с Log4j**
Если вы хотите использовать SLF4J с Log4j:

**POM.xml зависимости:**
	
```
<!-- SLF4J API -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.32</version>
</dependency>
<!-- SLF4J to Log4j adapter -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-log4j12</artifactId>
    <version>1.7.32</version>
</dependency>
<!-- Log4j itself -->
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
```

**Java код:**

	public class Log4jExample {
    	private static final Logger logger = LoggerFactory.getLogger(Log4jExample.class);

    	public static void main(String[] args) {
        	logger.info("This is an info message using Log4j!");
        	logger.warn("This is a warning message.");
        	logger.error("This is an error message.");
    	}
	}


### 3. **Параметризация сообщений**


	public class ParameterExample {
    	private static final Logger logger = LoggerFactory.getLogger(ParameterExample.class);

    	public static void main(String[] args) {
        	String user = "Alice";
        	int age = 30;

        	logger.info("User {} is {} years old.", user, age);
    	}
	}