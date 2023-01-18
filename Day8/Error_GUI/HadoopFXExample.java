import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;

public class HadoopFXExample extends Application {
    // Custom exception class for Hadoop errors
    public static class HadoopError extends Exception {
        private String errorMessage;

        public HadoopError(String message) {
            this.errorMessage = message;
        }

        public String getErrorMessage() {
            return errorMessage;
        }
    }

    @Override
    public void start(Stage primaryStage) {
        // Create a label to display the error message
        Label errorLabel = new Label();
        errorLabel.setVisible(false);

        // Create a button to perform a Hadoop operation
        Button button = new Button();
        button.setText("Perform Hadoop Operation");
        button.setOnAction(event -> {
            try {
                // Perform a Hadoop operation that may throw an exception
                FileSystem fs = FileSystem.get(new Configuration());
                fs.create(new Path("/test.txt"));
            } catch (IOException e) {
                // Wrap the exception in the custom exception class and throw it
                throw new HadoopError("Error creating file: " + e.getMessage());
            }
        });

        // Add the button and the error label to the root pane
        StackPane root = new StackPane();
        root.getChildren().add(button);
        root.getChildren().add(errorLabel);

        // Create the scene and show the stage
        Scene scene = new Scene(root, 300, 250);
        primaryStage.setTitle("HadoopFX Example");
        primaryStage.setScene(scene);
        primaryStage.show();

        // Add an event handler to catch the custom exception
        scene.getRoot().addEventHandler(HadoopError.class, event -> {
            // Display the error message in the label
            errorLabel.setText(event.getErrorMessage());
            errorLabel.setVisible(true);
        });
    }

    public static void main(String[] args) {
        launch(args);
    }
}
