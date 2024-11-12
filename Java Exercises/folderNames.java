import org.w3c.dom.*;
import javax.xml.parsers.*;
import org.xml.sax.InputSource;
import java.io.*;
import java.util.*;


public class Folders {
    public static Collection<String> folderNames(String xml, char startingLetter) throws Exception {
        if (xml == null) {
            throw new UnsupportedOperationException("XML input cannot be null.");
        }

        Collection<String> result = new ArrayList<>();

        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        StringReader stringReader = new StringReader(xml);
        InputSource inputSource = new InputSource(stringReader);
        Document document = builder.parse(inputSource);

        NodeList folderNodes = document.getElementsByTagName("folder");

        for (int i = 0; i < folderNodes.getLength(); i++) {
            Element folderElement = (Element) folderNodes.item(i);
            String folderName = folderElement.getAttribute("name");
            if (folderName.charAt(0) == startingLetter) {
                result.add(folderName);
            }
        }

        return result;
    }
    
    public static void main(String[] args) throws Exception {
        String xml =
                "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
                "<folder name=\"c\">" +
                    "<folder name=\"program files\">" +
                        "<folder name=\"uninstall information\" />" +
                    "</folder>" +
                    "<folder name=\"users\" />" +
                "</folder>";

        Collection<String> names = folderNames(xml, 'u');
        for(String name: names)
            System.out.println(name);
    }
}