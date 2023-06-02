package handeler;


import java.io.File;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class FileHandler {
	private static Logger log = LoggerFactory.getLogger(FileHandler.class);
	
	public int deleteFile(String imgFileName, String savePath) {
		log.info(">>>deleteFile method 진입");
		boolean isDel=false;
		File fileDir = new File(savePath);
		File removeFile = new File(fileDir+File.separator+imgFileName);
		File removeThFile = new File(fileDir+File.separator+"th_"+imgFileName);
		
		if(removeFile.exists()||removeThFile.exists()) {
			log.info(">>>removeFile 준비");
			isDel = removeFile.delete();
			log.info(">>>removeFile 완료");
			if(isDel) {
				log.info(">>>removeThFile 준비");
				isDel = removeThFile.delete();
				log.info(">>>removeThFile 완료");
			}
		}
		
		log.info(">>>deleteFile method 종료");
		return isDel?1:0;
	};
}
