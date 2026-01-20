from enum import Enum
from rembg import new_session
from rembg.bg import BaseSession


class RembgModel(str, Enum):
    u2net = "u2net"
    u2netp = "u2netp"
    u2net_human_seg = "u2net_human_seg"
    u2net_cloth_seg = "u2net_cloth_seg"
    silueta = "silueta"
    isnet_general_use = "isnet-general-use"
    isnet_anime = "isnet-anime"
    sam = "sam"
    birefnet_general = "birefnet-general"
    birefnet_general_lite = "birefnet-general-lite"
    birefnet_portrait = "birefnet-portrait"
    birefnet_dis = "birefnet-dis"
    birefnet_hrsod = "birefnet-hrsod"
    birefnet_cod = "birefnet-cod"
    birefnet_massive = "birefnet-massive"
    bria_rmbg = "bria-rmbg"


_SESSIONS: dict[str, BaseSession] = {}


def get_session(model: RembgModel) -> BaseSession:
    key = model or "default"

    if key not in _SESSIONS:
        _SESSIONS[key] = new_session(model)
    return _SESSIONS[key]
