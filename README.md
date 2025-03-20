This was modified from ant-research's MagicQuill 

##  Setup
Follow the following guide to set up the environment.

1. git clone repo. **Please don't forget the `--recursive` flag.** Otherwise, you will find `LLaVA` submodule missing.
    ```
    git clone --recursive https://github.com/antorio/thinkbrush.git
    cd thinkbrush
    ```
2. download and unzip checkpoints
    ```
    wget --no-check-certificate "https://f001.backblazeb2.com/file/tw-rnd/models.zip?Authorization=3_20250318183434_793c35a4c50c8aa491ff7e43_afe0463d032f20b2e3f384f434270390cbfba3c3_001_20250325183434_0000_dnld" -O 'models.zip'
    unzip models.zip
    mv contents/models models
    rm contents
    ```
    If the .zip file is not accessible, download it via browser. All checkpoints are about 25 GB in total. It may take some time to download. 

---

If you are a Windows user, you may try to use `windows_setup.bat` to conveniently install environments, just enter `windows_setup.bat` in your Python shell. For Linux user, check `linux_setup.sh`.

Alternatively, follow the step-by-step installation guide.

3. create environment
    ```
    conda create -n thinkbrush python=3.10 -y
    conda activate thinkbrush
    ```

4. install torch with GPU support
    ```
    pip install torch==2.1.2 torchvision==0.16.2 torchaudio==2.1.2 --index-url https://download.pytorch.org/whl/cu118
    ```

5. install the interface
    ```
    pip install gradio_magicquill-0.0.1-py3-none-any.whl
    ```
    
6. install llava environment
    ```
    (For Linux)
    cp -f pyproject.toml MagicQuill/LLaVA/
    pip install -e MagicQuill/LLaVA/
    ```
    or
    ```
    (For Windows)
    copy /Y pyproject.toml MagicQuill\LLaVA\
    pip install -e MagicQuill\LLaVA\
    ```
    (For Windows PowerShell, the first line should be `Copy-Item -Path pyproject.toml -Destination "MagicQuill\LLaVA" -Force`)
    

7. install the remaining environment
    ```
    pip install -r requirements.txt
    ```

8. run gradio app
    ```
    python thinkbrush.py
    ```
    


## Docker Container

You can build a docker container with MagicQuill as follows:

1. git clone repo. **Please don't forget the `--recursive` flag.** Otherwise, you will find `LLaVA` submodule missing.
    ```
    git clone --recursive https://github.com/magic-quill/MagicQuill.git
    cd MagicQuill
    ```

2. download and unzip checkpoints
    ```
    wget --no-check-certificate "https://f001.backblazeb2.com/file/tw-rnd/models.zip?Authorization=3_20250318183434_793c35a4c50c8aa491ff7e43_afe0463d032f20b2e3f384f434270390cbfba3c3_001_20250325183434_0000_dnld" -O 'models.zip'
    unzip models.zip
    mv contents/models models
    rm contents
    ```
    If the .zip file is not accessible, download it via browser. All checkpoints are about 25 GB in total. It may take some time to download. Alternatively, check our checkpoints at [huggingface](https://huggingface.co/LiuZichen/MagicQuill-models).
    
    Note: these can be located anywhere on the host computer, but Docker Compose expects them to be in `/data/magicquill/models` by default. Update `docker-compose.yaml` if you unzip them to another location.

3. build the image
   ```
   docker compose build
   ```

4. run the image
   ```
   docker compose up -d
   ```

## Tutorial

Please read before you try!

<!DOCTYPE html>
<html>
<body>
<div class="tutorial"><div><h3 align="center" class="heading">I. Three type of magic quills</h3><div align="center"><img fill="white" src="docs/icons/brush_edge_add.svg" alt="SVG image" class="icon" width="100"></div><div align="center"><br>Use the <b>add brush</b> to add details and elements guided by prompts - express your ideas with your own lively strokes!<br></div><div class="ant-row css-1kuana8"><div class="ant-col ant-col-xs-24 ant-col-md-12 css-1kuana8"><div align="center"><br><img width="300" src="docs/gifs/deer.gif" alt="gif description" class="gif"></div><div align="center"><small>"With just a few strokes, a vivid little deer comes to life"</small><br></div></div><div class="ant-col ant-col-xs-24 ant-col-md-12 css-1kuana8"><div align="center"><br><img width="300" src="docs/gifs/necklace.gif" alt="gif description" class="gif"></div><div align="center"><small> "Adorn the beautiful lady with a necklace"</small><br></div></div></div><div align="center"><br><img src="docs/icons/brush_edge_remove.svg" alt="SVG image" class="icon" width="100"></div><div align="center"><br>The <b>subtract brush</b> can remove excess details or redraw areas based on prompts. If there's anything you're not satisfied with, just subtract it away!<br></div><div class="ant-row css-1kuana8"><div class="ant-col ant-col-xs-24 ant-col-md-12 css-1kuana8"><div align="center"><br><img width="300" src="docs/gifs/dolphin.gif" alt="gif description" class="gif"></div><div align="center"><small> "A dolphin with two tail fins? Let's give it a quick 'treatment'!"</small><br></div></div><div class="ant-col ant-col-xs-24 ant-col-md-12 css-1kuana8"><div align="center"><br><img width="300" src="docs/gifs/skeleton cowboy.gif" alt="gif description" class="gif"></div><div align="center"><small> "Let's take off Mr. Skeleton's hat and help him cool down."</small><br><br></div></div></div><div align="center" style="display: flex; justify-content: center; align-items: center; gap: 10px;"><br><img src="docs/icons/brush_edge_add.svg" alt="add brush" class="icon" width="100"><span>&amp;</span><img src="docs/icons/brush_edge_remove.svg" alt="minus brush" class="icon" width="100"></div><div align="center"><br>Combine the <b>add and subtract brushes</b> to create amazing combo effects!<br></div><div class="ant-row css-1kuana8"><div class="ant-col ant-col-xs-24 ant-col-md-12 css-1kuana8"><div align="center"><br><img width="300" src="docs/gifs/mona lisa cat.gif" alt="gif description" class="gif"></div><div align="center"><small> "Let's give Mona Lisa a pet cat~"</small><br></div></div><div class="ant-col ant-col-xs-24 ant-col-md-12 css-1kuana8"><div align="center"><br><img width="300" src="docs/gifs/handsome bowtie.gif" alt="gif description" class="gif"></div><div align="center"><small> "Let's give this handsome fellow a new tie!"</small><br><br></div></div></div><div align="center"><img src="docs/icons/brush.svg" alt="SVG image" class="icon" width="100"></div><div align="center"><br>The <b>color brush</b> can precisely color the image, matching the color of your brush~<br></div><div class="ant-row css-1kuana8"><div class="ant-col ant-col-xs-24 ant-col-md-12 css-1kuana8"><div align="center"><br><img width="300" src="docs/gifs/beautiful hair.gif" alt="gif description" class="gif"></div><div align="center"><small>"Precise color highlighting - paint exactly where you want to color"</small><br></div></div><div class="ant-col ant-col-xs-24 ant-col-md-12 css-1kuana8"><div align="center"><br><img width="300" src="docs/gifs/cake flowers.gif" alt="gif description" class="gif"></div><div align="center"><small> "Don't you think the blue flowers look more dreamy than the pink ones?"</small><br><br></div></div></div><div align="center">*Please note the color brush and add&amp;subtract brush are mutually exclusive - you can only use one at a time!<br><br></div><hr><h3 align="center" class="heading">II. Draw and Guess</h3><div align="center"><img src="docs/icons/wand.svg" alt="SVG image" class="icon" width="100"></div><div align="center">Our brush is super smart! Look at the examples above - as soon as you finish drawing, it quickly guesses what you want to create and fills in the prompts for you~ Sometimes it might guess wrong though, so feel free to tell it what you actually want to draw~<br></div><div class="ant-row ant-row-center css-1kuana8"><div class="ant-col ant-col-xs-24 ant-col-md-12 css-1kuana8"><div align="center"><br><img width="300" src="docs/gifs/path.gif" alt="gif description" class="gif"></div><div align="center"><small> "Oops! I don't want to draw a vine, I want to create a path!"</small><br><br></div></div></div><hr><h3 align="center" class="heading">III. Super useful canvas tools!</h3><div align="center"><br><img src="docs/icons/upload.svg" alt="SVG image" class="icon" width="100"></div><div align="center">Click this button to upload the photo you want to edit~<br></div><div align="center"><br><img src="docs/icons/eraser.svg" alt="SVG image" class="icon" width="100"></div><div align="center">Made a mistake with the brush? Just erase it with the rubber tool!<br></div><div align="center"><br><img src="docs/icons/cursor.svg" alt="SVG image" class="icon" width="100"></div><div align="center">Drag, rotate, and resize your strokes with the cursor - just like when you're working in PowerPoint!<br></div><br><div align="center" style="display: flex; justify-content: center; align-items: center; gap: 10px;"><img src="docs/icons/undo.svg" alt="add brush" class="icon" width="100"><span>&amp;</span><img src="docs/icons/redo.svg" alt="minus brush" class="icon" width="100"></div><div align="center">Left is ctrl+z, right is ctrl+y - you know what that means! 😊<br>And for Mac users, left is command+z, right is command+shift+z! 😝<br></div><div align="center"><br><img src="docs/icons/delete.svg" alt="SVG image" class="icon" width="100"></div><div align="center">Oops! That doesn't look right 😵 - click this trash bin to delete the stroke<br></div><div align="center"><br><img src="docs/icons/eye.svg" alt="SVG image" class="icon" width="100"></div><div align="center">The brush strokes are in my way, how can I see the image😡?! Try clicking this button to temporarily hide your strokes<br></div><br><div align="center" style="display: flex; justify-content: center; align-items: center; gap: 10px;"><img src="docs/icons/accept.svg" alt="add brush" class="icon" width="100"><span>&amp;</span><img src="docs/icons/discard.svg" alt="minus brush" class="icon" width="100"></div><div align="center">These two icons will appear after the image is generated...<br>I love this generated image 😍, I want to keep editing! ➡️ Click ✅ to continue editing<br>What is this thing 😡, I don't want to see it! ➡️ Click ❎ to discard the result<br><br></div><hr><h3 align="center" class="heading">IV. Notes</h3><div align="center"><br><img src="docs/icons/loading.svg" alt="SVG image" class="icon" width="100"></div><div align="center">When you see the spinning icon in the bottom left corner, it means the magicquill is still charging up 💪 Wait for it to disappear before clicking the Run button!<br></div><div align="center"><br><img src="docs/icons/wand.svg" alt="SVG image" class="icon" width="100"></div><div align="center">When the magic wand is flashing, our brush is working hard to guess what you're trying to draw 🤔 Please be patient! 🙏<br><br></div><hr><h3 align="center" class="heading">V. Parameters</h3><div align="center">If you've made it here, you must really love our work! 😍<br>If you want to learn how to better control the generation results, don't miss this section! 😘<br>Next to the Run button, you can select parameters to modify advanced settings 🧐<br><br></div><div><ul><li><u>Base Model Name</u>: Users can adjust this to select appropriate base models for different editing styles<ul><li><a href="https://civitai.com/models/4201/realistic-vision-v60-b1">SD1.5/realisticVisionV60B1_v51VAE.safetensors</a>: This generates realistic style images! Use this most of the time.</li><li><a href="https://civitai.com/models/4384?modelVersionId=128713">SD1.5/DreamShaper.safetensors</a>: This one is for generating fantasy style images</li><li><a href="https://civitai.com/models/43331/majicmix-realistic">SD1.5/majicMIX_realistic</a>: This one is good at generating portraits 👩</li><li><a href="https://civitai.com/models/7240?modelVersionId=948574">SD1.5/MeinaMix.safetensors</a>: This one is good at generating anime images.</li><li><a href="https://civitai.com/models/36520/ghostmix">SD1.5/ghostmix_v20Bakedvae.safetensors</a>: Another model for anime image generation.</li><li>If there are any models you'd like to add, contact us!</li></ul></li><li><u>Negative Prompt</u>: Users can input content they want the model to avoid generating. Whatever you don't want to generate, put it here.</li><li><u>Fine Edge</u>: Users can enable this option to activate fine edge control.</li><li><u>Grow Size</u>: Adjust this parameter to set the pixel range affected around brush strokes when editing images, to expand/reduce the brush stroke influence area.</li><li><u>Edge Strength</u>: Parameter for adjusting the add/subtract brush control strength. Simply put, if you're confident in your drawing skills, you can increase strength. If you're a bad drawer like us 🤦, please keep the parameter as is, or reduce the strength a bit.</li><li><u>Color Strength</u>: Parameter for adjusting the color brush control strength, can adjust the image's coloring effects.</li><li>The remaining parameters are just some common parameters for diffusion models! You basically don't need to manage these, but if you're in the industry/AI art expert, feel free to try adjusting them.</li></ul></div>
</body>
</html>

## Citation
Don't forget to cite this source if it proves useful in your research!
```bibtex
@article{liu2024magicquill, 
	title={MagicQuill: An Intelligent Interactive Image Editing System}, 
	author={Zichen Liu and Yue Yu and Hao Ouyang and Qiuyu Wang and Ka Leong Cheng and Wen Wang and Zhiheng Liu and Qifeng Chen and Yujun Shen}, 
	year={2024}, 
	eprint={2411.09703}, 
	archivePrefix={arXiv}, 
	primaryClass={cs.CV}}
```

## Acknowledgement
Our implementation is based on 
- [ComfyUI-BrushNet](https://github.com/nullquant/ComfyUI-BrushNet)
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI)
- [LLaVA](https://github.com/haotian-liu/LLaVA)
- [comfyui_controlnet_aux](https://github.com/Fannovel16/comfyui_controlnet_aux)
- [ComfyUI_Custom_Nodes_AlekPet](https://github.com/AlekPet/ComfyUI_Custom_Nodes_AlekPet)
- [fabric.js](https://github.com/fabricjs/fabric.js)

Thanks for their remarkable contribution and released code!

## Note
Note: This repo is governed by the license of CC BY-NC 4.0 We strongly advise users not to knowingly generate or allow others to knowingly generate harmful content, including hate speech, violence, pornography, deception, etc. 

